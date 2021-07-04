import React, { useCallback } from 'react';
import { Button } from '@neos-project/react-ui-components';
import { AxeResults } from 'axe-core';

export interface IExportButtonProps {
    label: string;
    disabled?: boolean;
    filename?: string;
    results: AxeResults | null;
}

const sanitizeFilename = (filename: string): string =>
    filename.replace(/[/\\?%*:|"<>]/g, '_')
        .replace(/_+/g, '_');

export const getFilenameFromTitle = (): string =>
    `axe-results-${(window.opener || window).document.title}.json`;

const download = (content: string, filename: string, contentType = 'application/json') => {
    const a = document.createElement('a');
    a.setAttribute('href', `data:${contentType};charset=utf-8,${encodeURIComponent(content)}`);
    a.setAttribute('download', sanitizeFilename(filename));
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

export const ExportButton: React.FunctionComponent<IExportButtonProps> = props => {
    const handleClick = useCallback(() => {
        download(JSON.stringify(props.results), props.filename || 'axe-results.json');
    }, [ props.results, props.filename ]);
    return (
        <Button
            disabled={props.disabled || !props.results}
            onClick={handleClick}
        >
            {props.label}
        </Button>
    );
};

export const ExportFeatureName = 'export';
