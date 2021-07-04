import React from 'react';
import { IconButton } from '@neos-project/react-ui-components';
import { I18nRegistry } from '@neos-project/neos-ts-interfaces';
import { ContentElementInfo } from '../types/report';
import styles from './node-info.css';

interface INodeInfoProps {
    selector: string;
    html: string;
    contentElement: ContentElementInfo | null;
    focusNode: (contextPath: string, fusionPath: string) => void;
    highlightNode: (selector: string | null) => void;
    highlightedSelector: string | null;
    i18nRegistry: I18nRegistry;
}

const NodeInfoRow: React.FunctionComponent<{title: string}> = props => (
    <li className={styles.nodeInfoList__item}>
        <p className={styles.nodeInfoList__title}>{props.title}</p>
        <div className={styles.nodeInfoList__content}>{props.children}</div>
    </li>
);

export const NodeInfo: React.FunctionComponent<INodeInfoProps> = props => {
    const nodePath = props.contentElement
        ? props.contentElement.contextPath.split('@')[0]
        : null;
    const nodeName = nodePath?.split('/').pop();
    const nodeIsHighlighted = props.highlightedSelector === props.selector;
    const onHighlightElement = () =>
        props.highlightNode(nodeIsHighlighted ? null : props.selector);
    return (
        <ul className={styles.nodeInfoList}>
            <NodeInfoRow title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.domSelector')}>
                <pre>{props.selector}</pre>
                <IconButton
                    icon="crosshairs"
                    aria-label={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.highlightNode')}
                    onClick={onHighlightElement}
                    aria-pressed={nodeIsHighlighted ? 'true' : 'false'}
                    isPressed={nodeIsHighlighted}
                />
            </NodeInfoRow>
            <NodeInfoRow title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.html')}>
                <pre className="break">{props.html}</pre>
            </NodeInfoRow>
            {props.contentElement?.fusionPrototype && (
                <NodeInfoRow title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.renderingPrototype')}>
                    <p>{props.contentElement.fusionPrototype}</p>
                </NodeInfoRow>
            )}
            {nodePath && (
                <NodeInfoRow title={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.neosNode')}>
                    <p title={nodePath}>{nodeName}</p>
                    <IconButton
                        icon="crosshairs"
                        aria-label={props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:nodeInfo.selectNode')}
                        onClick={() => props.focusNode(props.contentElement.contextPath, props.contentElement.fusionPath)}
                    />
                </NodeInfoRow>
            )}
        </ul>
    );
};
