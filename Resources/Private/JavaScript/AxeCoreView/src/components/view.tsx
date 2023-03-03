import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AxeResults } from 'axe-core';
import { actions as axeCoreViewActions, selectors as axeCoreViewSelectors } from '../state';
import { I18nRegistry } from '@neos-project/neos-ts-interfaces';
import { highlightElement } from '../guest-frame/highlight';
import { getGuestFrameWindow } from '../guest-frame/util';
import { Button } from '@neos-project/react-ui-components';
import { ResultSection } from './result-section';
import { IResultListProps, ResultList } from './result-list';
import { PopoutFeatureName } from '../AxeCorePopout';
import { actions, selectors } from '@neos-project/neos-ui-redux-store';
import styles from './style.css';
import { ExportButton, ExportFeatureName, getFilenameFromTitle } from './export';
import { NodeData } from '../types/custom';

export interface IViewProps {
    isAnalyzing: boolean;
    isPoppedOut: boolean;
    isPopout?: boolean;
    currentReport: AxeResults | null;
    currentlySelectedDocument: string | null;
    focusNode: (contextPath: string, fusionPath: string) => void;
    analyze: () => void;
    popout: () => void;
    popin: () => void;
    i18nRegistry: I18nRegistry;
    featureEnabled: (feature: string) => boolean;
    getNodeData: (contextPath: string) => NodeData | null;
}

export const View: React.FunctionComponent<IViewProps> = props => {
    const [ highlightedSelector, setHighlightedSelector ] = useState<string | null>(null);
    const highlightNode = (selector: string): void => {
        highlightElement(selector);
        setHighlightedSelector(selector);
    };

    useEffect(() => {
        return () => {
            const gfw = getGuestFrameWindow();
            if (gfw) {
                const el = gfw.document.getElementById('prgfx-neos-axecore-elementhighlighter');
                if (el) {
                    el.style.display = 'none';
                }
            }
        };
    });

    if (!props.isPopout && props.isPoppedOut) {
        return (
            <div>
                <p>
                    {props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:popout.poppedOut')}
                </p>
                <Button
                    onClick={props.popin}
                >
                    {props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:popout.popin')}
                </Button>
            </div>
        );
    }

    const commonResultListProps: Omit<IResultListProps, 'items'> = {
        focusNode: props.focusNode,
        i18nRegistry: props.i18nRegistry,
        highlightNode: highlightNode,
        highlightedSelector: highlightedSelector,
        getNodeData: props.getNodeData,
    };

    return (
        <div>
            {props.isAnalyzing && <p>{props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:view.analyzing')}</p>}
            <Button
                disabled={props.isAnalyzing || !props.currentlySelectedDocument}
                onClick={props.analyze}
                style="brand"
                icon="search"
            >
                {props.currentReport
                    ? props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:view.analyzeAgain')
                    : props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:view.analyze')
                }
            </Button>
            {props.featureEnabled(PopoutFeatureName) && !props.isPopout && props.currentReport && (
                <div className={styles.spacer}>
                    <Button
                        onClick={props.popout}
                    >
                        {props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:popout.popout')}
                    </Button>
                </div>
            )}
            {props.featureEnabled(ExportFeatureName) && props.currentReport && (
                <div className={styles.spacer}>
                    <ExportButton
                        label={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:export.export')}
                        results={props.currentReport}
                        filename={getFilenameFromTitle()}
                    />
                </div>
            )}
            {props.currentReport && (
                <React.Fragment>
                    <ResultSection
                        icon="exclamation-circle"
                        iconColor="error"
                        title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:results.category.violations', 'Violations', [ props.currentReport.violations.length ])}
                        collapsed={props.currentReport.violations.length === 0}
                    >
                        <ResultList
                            items={props.currentReport.violations}
                            {...commonResultListProps}
                        />
                    </ResultSection>
                    <ResultSection
                        icon="question-circle"
                        iconColor="default"
                        title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:results.category.incomplete', 'Incomplete', [ props.currentReport.incomplete.length ])}
                        collapsed
                    >
                        <ResultList
                            items={props.currentReport.incomplete}
                            {...commonResultListProps}
                        />
                    </ResultSection>
                    <ResultSection
                        icon="check-circle"
                        iconColor="success"
                        title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:results.category.passes', 'Passes', [ props.currentReport.passes.length ])}
                        collapsed
                    >
                        <ResultList
                            items={props.currentReport.passes}
                            {...commonResultListProps}
                        />
                    </ResultSection>
                    <ResultSection
                        icon="minus-circle"
                        iconColor="default"
                        title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:results.category.inapplicable', 'Inapplicable', [ props.currentReport.inapplicable.length ])}
                        collapsed
                    >
                        <ResultList
                            items={props.currentReport.inapplicable}
                            {...commonResultListProps}
                        />
                    </ResultSection>
                </React.Fragment>
            )}
        </div>
    );
};

export interface IViewContainerProps {
    i18nRegistry: I18nRegistry;
    analyze: () => void;
    isPopout?: boolean;
    featureEnabled: (feature: string) => boolean;
    getNodeData: (contextPath: string) => NodeData | null;
}

export const ViewContainer: React.FunctionComponent<IViewContainerProps> = props => {
    const dispatch = useDispatch();
    const focusNode = useCallback((contextPath: string, fusionPath: string) => {
        dispatch(actions.CR.Nodes.focus(contextPath, fusionPath));
        dispatch(actions.UI.ContentCanvas.requestScrollIntoView(true));
    }, [ dispatch ]);
    const popout = useCallback(() => dispatch(axeCoreViewActions.popout()), [ dispatch ]);
    const popin = useCallback(() => dispatch(axeCoreViewActions.popin()), [ dispatch ]);
    const currentlySelectedDocument = useSelector(state => selectors.CR.Nodes.documentNodeContextPathSelector(state));
    const currentReport = useSelector(state => axeCoreViewSelectors.getReport(state)(selectors.CR.Nodes.documentNodeContextPathSelector(state)));
    const isAnalyzing = useSelector(state => axeCoreViewSelectors.isAnalyzing(state));
    const isPoppedOut = useSelector(state => axeCoreViewSelectors.isPoppedOut(state));
    return (
        <View
            isAnalyzing={isAnalyzing}
            isPoppedOut={isPoppedOut}
            currentReport={currentReport}
            currentlySelectedDocument={currentlySelectedDocument}
            focusNode={focusNode}
            analyze={props.analyze}
            popout={popout}
            popin={popin}
            i18nRegistry={props.i18nRegistry}
            isPopout={props.isPopout}
            featureEnabled={props.featureEnabled}
            getNodeData={props.getNodeData}
        />
    );
};
