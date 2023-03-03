import React from 'react';
import { NodeResult } from 'axe-core';
import style from './style.css';
import { NodeInfo } from './node-info';
import { I18nRegistry } from '@neos-project/neos-ts-interfaces';
import { NodeData } from '../types/custom';

export interface IOccurrenceProps {
    node: NodeResult;
    focusNode: (contextPath: string, fusionPath: string) => void;
    highlightNode: (selector: string | null) => void;
    highlightedSelector: string | null;
    i18nRegistry: I18nRegistry;
    getNodeData: (contextPath: string) => NodeData | null;
}

export const Occurrence: React.FunctionComponent<IOccurrenceProps> = props => {
    let summaryTitle: string;
    let summaryTextItems: string[];
    if (props.node.failureSummary) {
        if (props.node.failureSummary.includes('\n')) {
            const lines = props.node.failureSummary.split('\n');
            summaryTitle = lines[0];
            summaryTextItems = lines.slice(1).map(l => l.trim());
        } else {
            // sometimes the text is not separated by newlines, so we try breaking
            // on punctuation marks. however some languages my not use these..
            summaryTitle = props.node.failureSummary.split(':')[0] + ':';
            const summaryText = props.node.failureSummary.substr(summaryTitle.length);
            summaryTextItems = summaryText
                .split(/\.\s+/)
                .map((l, i, a) => a.length - 1 > i ? l + '.' : l);
        }
    }
    return (
        <div className={style.occurrenceItem}>
            {props.node.failureSummary && (
                <p className={style.resultDescription}>
                    {summaryTitle}
                    {summaryTextItems.length >= 1 && (
                        <ul className={style.occurrenceErrorList}>
                            {summaryTextItems.map((l, i) => (
                                <li className={style.occurrenceErrorItem} key={i}>{l}</li>
                            ))}
                        </ul>
                    )}
                </p>
            )}
            {props.node.target && props.node.target.length > 0 && props.node.target.map((selector, i) => (
                <NodeInfo
                    key={i}
                    selector={selector}
                    html={props.node.html}
                    contentElement={props.node.contentElement[i]}
                    focusNode={props.focusNode}
                    highlightNode={props.highlightNode}
                    highlightedSelector={props.highlightedSelector}
                    i18nRegistry={props.i18nRegistry}
                    getNodeData={props.getNodeData}
                />
            ))}
        </div>
    );
};
