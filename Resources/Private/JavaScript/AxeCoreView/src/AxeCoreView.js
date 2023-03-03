import React, { Component } from 'react';
import { connect } from 'react-redux';
import { neos } from '@neos-project/neos-ui-decorators';
import { actions, selectors } from '@neos-project/neos-ui-redux-store';
import { actions as axeCoreViewActions, selectors as axeCoreViewSelectors } from './state';
import { ViewContainer } from './components/view';
import { featureEnabled } from './util';

@connect(
    state => ({
        currentlySelectedDocument: selectors.CR.Nodes.documentNodeContextPathSelector(state),
        currentReport: axeCoreViewSelectors.getReport(state)(selectors.CR.Nodes.documentNodeContextPathSelector(state)),
        isAnalyzing: axeCoreViewSelectors.isAnalyzing(state),
        isPoppedOut: axeCoreViewSelectors.isPoppedOut(state),
        getNodeData: selectors.CR.Nodes.nodeByContextPath(state),
    }),
    {
        focusNode: actions.CR.Nodes.focus,
        analyze: axeCoreViewActions.analyze,
        popout: axeCoreViewActions.popout,
        popin: axeCoreViewActions.popin,
    }
)
@neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get('i18n'),
    frontendConfiguration: globalRegistry.get('frontendConfiguration'),
}))
export default class AxeCoreView extends Component {

    constructor(props) {
        super(props);
        this.analyze = this.analyze.bind(this);
    }

    analyze() {
        this.props.analyze(this.props.currentlySelectedDocument);
    }

    render() {
        const isFeatureEnabled = featureEnabled(this.props.frontendConfiguration);
        return (
            <ViewContainer
                i18nRegistry={this.props.i18nRegistry}
                featureEnabled={isFeatureEnabled}
                analyze={this.analyze}
                getNodeData={this.props.getNodeData}
            />
        );
    }
}
