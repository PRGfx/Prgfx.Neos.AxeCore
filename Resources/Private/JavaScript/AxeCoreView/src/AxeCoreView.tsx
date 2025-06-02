import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNeos } from './util/useNeos';
import { selectors } from '@neos-project/neos-ui-redux-store';
import { actions as axeCoreViewActions, selectors as axeCoreViewSelectors } from './state';
import { ViewContainer } from './components/view';
import { featureEnabled } from './util';
import { NodeData } from './types/custom';

// @connect(
//     state => ({
//         currentlySelectedDocument: selectors.CR.Nodes.documentNodeContextPathSelector(state),
//         currentReport: axeCoreViewSelectors.getReport(state)(selectors.CR.Nodes.documentNodeContextPathSelector(state)),
//         isAnalyzing: axeCoreViewSelectors.isAnalyzing(state),
//         isPoppedOut: axeCoreViewSelectors.isPoppedOut(state),
//         getNodeData: selectors.CR.Nodes.nodeByContextPath(state),
//     }),
//     {
//         focusNode: actions.CR.Nodes.focus,
//         analyze: axeCoreViewActions.analyze,
//         popout: axeCoreViewActions.popout,
//         popin: axeCoreViewActions.popin,
//     }
// )
// @neos((globalRegistry) => ({
//     i18nRegistry: globalRegistry.get('i18n'),
//     frontendConfiguration: globalRegistry.get('frontendConfiguration'),
// }))
// export default class AxeCoreView extends Component {
//
//     constructor(props) {
//         super(props);
//         this.analyze = this.analyze.bind(this);
//     }
//
//     analyze() {
//         this.props.analyze(this.props.currentlySelectedDocument);
//     }
//
//     render() {
//         const isFeatureEnabled = featureEnabled(this.props.frontendConfiguration);
//         return (
//             <ViewContainer
//                 i18nRegistry={this.props.i18nRegistry}
//                 featureEnabled={isFeatureEnabled}
//                 analyze={this.analyze}
//                 getNodeData={this.props.getNodeData}
//             />
//         );
//     }
// }

type AxeCoreViewProps = {
    analyze: (contextPath: string) => void;
}

export const AxeCoreView = (props: AxeCoreViewProps) => {
    const { globalRegistry } = useNeos();

    const getNodeData = useSelector<unknown, (contextPath: string) => NodeData>(selectors.CR.Nodes.nodeByContextPath);
    const currentlySelectedDocument = useSelector<unknown, string>(selectors.CR.Nodes.documentNodeContextPathSelector);
    const dispatch = useDispatch();

    const isFeatureEnabled = featureEnabled(globalRegistry.get('frontendConfiguration'));

    const analyze = useCallback(() => {
        return dispatch(axeCoreViewActions.analyze(currentlySelectedDocument));
    }, [ props.analyze, currentlySelectedDocument ]);

    return (
        <ViewContainer
            i18nRegistry={globalRegistry.get('i18n')}
            featureEnabled={isFeatureEnabled}
            analyze={analyze}
            getNodeData={getNodeData}
        />
    );
};