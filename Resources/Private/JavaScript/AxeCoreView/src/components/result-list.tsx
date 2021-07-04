import React from 'react';
import { Result as AxeResult } from 'axe-core';
import { I18nRegistry } from '@neos-project/neos-ts-interfaces';
import { Result } from './result';
import { sortByImpact } from '../util';

export interface IResultListProps {
    items: AxeResult[];
    focusNode: (contextPath: string, fusionPath: string) => void;
    highlightNode: (selector: string | null) => void;
    highlightedSelector: string | null;
    i18nRegistry: I18nRegistry;
}

export const ResultList: React.FunctionComponent<IResultListProps> = props => {
    const sortedItems = sortByImpact(props.items);
    return (
        <ul>
            {sortedItems.map((data, i) => (
                <Result
                    key={i}
                    result={data}
                    focusNode={props.focusNode}
                    highlightNode={props.highlightNode}
                    highlightedSelector={props.highlightedSelector}
                    i18nRegistry={props.i18nRegistry}
                />
            ))}
        </ul>
    );
};
