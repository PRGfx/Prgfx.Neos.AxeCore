import React from 'react';
import { Icon } from '@neos-project/react-ui-components';
import cls from 'classnames';
import { Result as AxeResult } from 'axe-core';
import { I18nRegistry } from '@neos-project/neos-ts-interfaces';
import style from './style.css';
import { Occurrence } from './occurrence';

export interface IResultProps {
    result: AxeResult;
    focusNode: (contextPath: string, fusionPath: string) => void;
    highlightNode: (selector: string | null) => void;
    highlightedSelector: string | null;
    i18nRegistry: I18nRegistry;
}

export const Result: React.FunctionComponent<IResultProps> = props => (
    <li className={style.resultItem}>
        <Icon
            title={props.result.impact}
            icon="circle"
            className={cls(style.resultStatus, style[`resultStatus--${props.result.impact}`])}
        />
        <span className={style.resultTitle}>{props.result.description}</span>
        <p className={style.resultDescription}>
            {props.result.help}
            <br/>
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
                <Icon icon="external-link-alt"/>
            </a>
        </p>
        {props.result.nodes && props.result.nodes.length > 0 && (
            <ul>
                {props.result.nodes.map((node, i) => (
                    <Occurrence
                        key={i}
                        node={node}
                        focusNode={props.focusNode}
                        highlightNode={props.highlightNode}
                        highlightedSelector={props.highlightedSelector}
                        index={i}
                        occurrenceCount={props.result.nodes.length}
                        i18nRegistry={props.i18nRegistry}
                    />
                ))}
            </ul>
        )}
    </li>
);
