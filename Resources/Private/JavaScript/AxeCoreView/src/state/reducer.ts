import { $all, $get, $set } from 'plow-js';
import { AxeCoreViewState } from './state';
import { actionTypes, AxeCoreViewAction } from './actions';

interface BaseState {
    plugins?: {
        axeCoreView?: AxeCoreViewState,
    }
}

export const reducer = (state: BaseState, action: AxeCoreViewAction): BaseState => {
    switch (action.type) {
        case actionTypes.ANALYZE:
            return $all<BaseState>(
                s => $set([ 'plugins', 'axeCoreView', 'analysisRequested' ], action.contextPath, s),
                s => $set([ 'plugins', 'axeCoreView', 'reports', action.contextPath ], null, s),
            )(state);
        case actionTypes.SET_REPORT:
            return $all<BaseState>(
                s => $set([ 'plugins', 'axeCoreView', 'analysisRequested' ], false, s),
                s => $set([ 'plugins', 'axeCoreView', 'reports', action.contextPath ], action.report, s),
            )(state);
        case actionTypes.POPOUT:
            return $set([ 'plugins', 'axeCoreView', 'isPoppedOut' ], true, state);
        case actionTypes.POPIN:
            return $set([ 'plugins', 'axeCoreView', 'isPoppedOut' ], false, state);
        default:
            return state;
    }
};
