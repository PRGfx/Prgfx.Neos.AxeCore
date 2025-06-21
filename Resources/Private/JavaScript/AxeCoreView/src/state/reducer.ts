import { AxeCoreViewState } from './state';
import { actionTypes, AxeCoreViewAction } from './actions';

export interface BaseState {
    plugins?: {
        axeCoreView?: AxeCoreViewState,
    }
}

export const reducer = (state: BaseState, action: AxeCoreViewAction): BaseState => {
    switch (action.type) {
        case actionTypes.ANALYZE:
            return {
                ...state,
                plugins: {
                    ...state.plugins,
                    axeCoreView: {
                        ...state.plugins.axeCoreView ?? {
                            isPoppedOut: false,
                        },
                        analysisRequested: action.contextPath,
                        reports: {
                            ...state.plugins.axeCoreView?.reports,
                            [action.contextPath]: null,
                        },
                    },
                },
            };
        case actionTypes.SET_REPORT:
            return {
                ...state,
                plugins: {
                    ...state.plugins,
                    axeCoreView: {
                        ...state.plugins.axeCoreView ?? {
                            isPoppedOut: false,
                        },
                        analysisRequested: false,
                        reports: {
                            ...state.plugins.axeCoreView?.reports,
                            [action.contextPath]: action.report,
                        },
                    },
                },
            };
        case actionTypes.POPOUT:
            return {
                ...state,
                plugins: {
                    ...state.plugins,
                    axeCoreView: {
                        ...state.plugins.axeCoreView,
                        isPoppedOut: true,
                    },
                },
            };
        case actionTypes.POPIN:
            return {
                ...state,
                plugins: {
                    ...state.plugins,
                    axeCoreView: {
                        ...state.plugins.axeCoreView,
                        isPoppedOut: false,
                    },
                },
            };
        default:
            return state;
    }
};
