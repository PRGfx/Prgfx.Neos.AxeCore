import React from 'react';
import { I18nRegistry } from '@neos-project/neos-ts-interfaces';
import style from './style.css';


interface IOccurrencePaginatorProps {
    index: number;
    count: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
    i18nRegistry: I18nRegistry;
    showFirst?: boolean;
    showLast?: boolean;
}

const commonButtonProps = {
    type: 'button',
    className: style.occurrencePaginationButton,
} as const;

export const OccurrencePaginator: React.FunctionComponent<IOccurrencePaginatorProps> = props => {
    const counter = props.count > 1
        ? ` (${props.index + 1}/${props.count})`
        : '';
    const isFirst = props.index === 0;
    const isLast = props.index === props.count - 1;

    return (
        <div className={style.occurrencePagination}>
            {props.showFirst && (
                <button
                    {...commonButtonProps}
                    disabled={isFirst}
                    title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.first')}
                    aria-label={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.first')}
                    onClick={() => props.onChange(0)}
                >
                    ⇤
                </button>
            )}
            <button
                {...commonButtonProps}
                disabled={props.index === 0}
                title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.previous')}
                aria-label={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.previous')}
                onClick={() => props.onChange(Math.max(0, props.index - 1))}
            >
                ←
            </button>
            <span>
                <strong>
                    {props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:occurrence.affectedElement', 'Affected Element')}
                    {counter}
                </strong>
            </span>
            <button
                {...commonButtonProps}
                disabled={props.index === props.count - 1}
                title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.next')}
                aria-label={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.next')}
                onClick={() => props.onChange(Math.min(props.index + 1, props.count - 1))}
            >
                →
            </button>
            {props.showLast && (
                <button
                    {...commonButtonProps}
                    disabled={isLast}
                    title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.last')}
                    aria-label={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:paginateOccurrences.last')}
                    onClick={() => props.onChange(props.count - 1)}
                >
                    ⇥
                </button>
            )}
        </div>
    );
};
