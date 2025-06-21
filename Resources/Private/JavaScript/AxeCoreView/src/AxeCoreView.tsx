import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNeos } from './util/useNeos';
import { selectors } from '@neos-project/neos-ui-redux-store';
import { actions as axeCoreViewActions } from './state';
import { ViewContainer } from './components/view';
import { featureEnabled } from './util';
import { NodeData } from './types/custom';

type AxeCoreViewProps = {
    analyze: (contextPath: string) => void;
}

export const AxeCoreView = (props: AxeCoreViewProps) => {
    const { globalRegistry } = useNeos();

    const getNodeData = useSelector<unknown, (contextPath: string) => NodeData>(selectors.CR.Nodes.nodeByContextPath);
    const currentlySelectedDocument = useSelector<unknown, string>(selectors.CR.Nodes.documentNodeContextPathSelector);
    const dispatch = useDispatch();

    const isFeatureEnabled = featureEnabled(globalRegistry.get('frontendConfiguration'));

    const analyze = useCallback(() => {
        return dispatch(axeCoreViewActions.analyze(currentlySelectedDocument));
    }, [ props.analyze, currentlySelectedDocument ]);

    return (
        <ViewContainer
            i18nRegistry={globalRegistry.get('i18n')}
            featureEnabled={isFeatureEnabled}
            analyze={analyze}
            getNodeData={getNodeData}
        />
    );
};