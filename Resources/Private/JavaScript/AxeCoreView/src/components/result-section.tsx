import React, { useState } from 'react';
import {
    ToggablePanel,
    Icon,
} from '@neos-project/react-ui-components';
import style from './style.css';

export interface IResultSectionProps {
    title: string;
    icon: string;
    iconColor?: string;
    collapsed?: boolean;
}

export const ResultSection: React.FunctionComponent<IResultSectionProps> = props => {
    const [ collapsed, setCollapsed ] = useState(props.collapsed === true);
    let iconColor = props.iconColor;
    let iconClass;
    if (props.iconColor === 'success') {
        iconColor = undefined;
        iconClass = 'style__icon--color-success';
    }
    const togglePanel = () => setCollapsed(v => !v);
    return (
        <ToggablePanel className={style.resultSection} isOpen={!collapsed} onPanelToggle={togglePanel}>
            <ToggablePanel.Header>
                <div className={style.iconWrapper}>
                    <Icon icon={props.icon} className={iconClass} color={iconColor}/>
                </div>
                {props.title}
            </ToggablePanel.Header>
            <ToggablePanel.Contents>
                {props.children}
            </ToggablePanel.Contents>
        </ToggablePanel>
    );
};
