import React, { useCallback } from 'react';
import { Provider, useDispatch, useSelector, useStore } from 'react-redux';
import PopoutWindow from 'react-popout';
import { selectors } from '@neos-project/neos-ui-redux-store';
import { actions as axeCoreViewActions, selectors as axeCoreViewSelectors } from './state';
import { ViewContainer } from './components/view';
import { neos } from '@neos-project/neos-ui-decorators';
import { featureEnabled } from './util';
import styles from './components/style.css';

const popoutOptions = {
    menubar: 'no',
    location: 'no',
};

const Popout = (props) => {
    const store = useStore();
    const dispatch = useDispatch();
    const currentlySelectedDocument = useSelector(state => selectors.CR.Nodes.documentNodeContextPathSelector(state));
    const isPoppedOut = useSelector(state => axeCoreViewSelectors.isPoppedOut(state));
    const popin = useCallback(() => dispatch(axeCoreViewActions.popin()), [ dispatch ]);
    const analyze = useCallback(() => dispatch(axeCoreViewActions.analyze(currentlySelectedDocument)), [ dispatch, currentlySelectedDocument ]);
    if (!isPoppedOut) {
        return null;
    }
    const title = props.i18nRegistry.translate('Prgfx.Neos.AxeCore:AxeCoreView:popout.title', 'axe-core Results', [ document.title ]);
    return (
        <PopoutWindow
            title={title}
            onError={popin}
            onClosing={popin}
            options={{
                height: Math.max(400, window.innerHeight * 0.8),
                ...popoutOptions,
            }}
        >
            <div className={styles.popout}>
                <Provider store={store}>
                    {[ ...document.querySelectorAll('link[rel=stylesheet]') ].map((l, i) => (
                        <link rel="stylesheet" href={l.href} key={i} />
                    ))}
                    <ViewContainer
                        i18nRegistry={props.i18nRegistry}
                        analyze={analyze}
                        featureEnabled={props.featureEnabled}
                        isPopout
                    />
                </Provider>
            </div>
        </PopoutWindow>
    );
};

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n'),
    frontendConfiguration: globalRegistry.get('frontendConfiguration'),
}))
export class AxeCorePopout extends React.Component {
    render() {
        const isFeatureEnabled = featureEnabled(this.props.frontendConfiguration);
        return (
            <Popout
                i18nRegistry={this.props.i18nRegistry}
                featureEnabled={isFeatureEnabled}
            />
        );
    }
}

export const PopoutFeatureName = 'popout';
