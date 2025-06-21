import React, { useCallback } from 'react';
import { Provider, ProviderProps, useDispatch, useSelector, useStore } from 'react-redux';
import PopoutWindow from 'react-popout';
import { selectors } from '@neos-project/neos-ui-redux-store';
import { actions as axeCoreViewActions, selectors as axeCoreViewSelectors } from './state';
import { ViewContainer } from './components/view';
import { featureEnabled } from './util';
import styles from './components/style.module.css';
import { useNeos } from './util/useNeos';

const popoutOptions = {
    menubar: 'no',
    location: 'no',
};

// workaround to ignore "Provider cannot be used as a JSX component" error
const ReduxProvider = ({ store, children }: ProviderProps) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.createElement(Provider as any, { store }, children);

const Popout = (props) => {
    const store = useStore();
    const dispatch = useDispatch();
    const currentlySelectedDocument = useSelector(state => selectors.CR.Nodes.documentNodeContextPathSelector(state));
    const getNodeData = useSelector(state => selectors.CR.Nodes.nodeByContextPath(state));
    const isPoppedOut = useSelector(state => axeCoreViewSelectors.isPoppedOut(state));
    const popin = useCallback(() => dispatch(axeCoreViewActions.popin()), [ dispatch ]);
    const analyze = useCallback(() => dispatch(axeCoreViewActions.analyze(currentlySelectedDocument)), [ dispatch, currentlySelectedDocument ]);
    if (!isPoppedOut) {
        return null;
    }
    const title = props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:popout.title', 'axe-core Results', [ document.title ]);
    return (
        <PopoutWindow
            url="about:blank"
            containerId="axe-core-popout"
            title={title}
            onError={popin}
            onClosing={popin}
            options={{
                height: Math.max(400, window.innerHeight * 0.8),
                ...popoutOptions,
            }}
        >
            <div className={styles.popout}>
                <ReduxProvider store={store}>
                    {[ ...document.querySelectorAll<HTMLLinkElement>('link[rel=stylesheet]') ].map((l, i) => (
                        <link rel="stylesheet" href={l.href} key={i} />
                    ))}
                    <ViewContainer
                        i18nRegistry={props.i18nRegistry}
                        analyze={analyze}
                        featureEnabled={props.featureEnabled}
                        isPopout
                        getNodeData={getNodeData}
                    />
                </ReduxProvider>
            </div>
        </PopoutWindow>
    );
};

export const AxeCorePopout = () => {
    const { globalRegistry } = useNeos();

    return (
        <Popout
            i18nRegistry={globalRegistry.get('i18n')}
            featureEnabled={featureEnabled(globalRegistry.get('frontendConfiguration'))}
        />
    );
};

export const PopoutFeatureName = 'popout';
