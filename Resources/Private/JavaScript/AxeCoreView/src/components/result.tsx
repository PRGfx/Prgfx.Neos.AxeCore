import React, { useEffect, useState } from 'react';
import { Icon } from '@neos-project/react-ui-components';
import cls from 'classnames';
import { Result as AxeResult } from 'axe-core';
import { I18nRegistry } from '@neos-project/neos-ts-interfaces';
import style from './style.css';
import { Occurrence } from './occurrence';
import { OccurrencePaginator } from './OccurrencePaginator';
import { NodeData } from '../types/custom';

export interface IResultProps {
    result: AxeResult;
    focusNode: (contextPath: string, fusionPath: string) => void;
    highlightNode: (selector: string | null) => void;
    highlightedSelector: string | null;
    i18nRegistry: I18nRegistry;
    getNodeData: (contextPath: string) => NodeData | null;
}

export const Result: React.FunctionComponent<IResultProps> = props => {
    const [ selectedOccurrence, setSelectedOccurrence ] = useState(0);

    useEffect(() => {
        setSelectedOccurrence(0);
    }, [ props.result.nodes ]);

    return (
        <li className={style.resultItem}>
            <Icon
                title={props.result.impact}
                icon="circle"
                className={cls(style.resultStatus, style[`resultStatus--${props.result.impact}`])}
            />
            <span className={style.resultTitle}>{props.result.description}</span>
            <p className={style.resultDescription}>
                {props.result.help}
                <br />
                <a
                    href={props.result.helpUrl}
                    className={style.resultLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.i18nRegistry.translate(
                        'result.ruleLink',
                        'Details',
                        [ props.result.id ],
                        'Prgfx.Neos.AxeCore',
                        'AxeCoreView'
                    )}
                    <Icon icon="external-link-alt" />
                </a>
            </p>
            {props.result.nodes && props.result.nodes.length > 0 && (
                <>
                    <OccurrencePaginator
                        count={props.result.nodes.length}
                        index={selectedOccurrence}
                        onChange={setSelectedOccurrence}
                        i18nRegistry={props.i18nRegistry}
                    />
                    <Occurrence
                        key={selectedOccurrence}
                        node={props.result.nodes[selectedOccurrence]}
                        focusNode={props.focusNode}
                        highlightNode={props.highlightNode}
                        highlightedSelector={props.highlightedSelector}
                        i18nRegistry={props.i18nRegistry}
                        getNodeData={props.getNodeData}
                    />
                </>
            )}
        </li>
    );
};
