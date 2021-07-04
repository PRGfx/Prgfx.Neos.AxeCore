import {
    actions as neosActions,
    actionTypes as neosActionTypes,
    selectors as neosSelectors,
} from '@neos-project/neos-ui-redux-store';
import { takeLatest, put, select } from 'redux-saga/effects';
import * as selectors from './selectors';
import { actionTypes, actions, AxeCoreAnalyzeAction } from './actions';
import { generateReport } from '../util';

const targetPreviewMode = 'axeAnalyzerView';

export function* handleAnalyzerRequest({ store, globalRegistry }) {
    let previousPreviewMode, currentPreviewMode, contextPath;
    // load the correct preview-mode
    yield takeLatest(actionTypes.ANALYZE, function* cb(action) {
        previousPreviewMode = yield select(neosSelectors.UI.EditPreviewMode.currentEditPreviewMode);
        contextPath = (action as AxeCoreAnalyzeAction).contextPath;
        try {
            yield put(neosActions.UI.EditPreviewMode.set(targetPreviewMode));
        } catch (e) { console.error(e); }
    });
    // when loaded generate a report
    yield takeLatest(neosActionTypes.UI.ContentCanvas.STOP_LOADING, function* () {
        const state = store.getState();
        currentPreviewMode = neosSelectors.UI.EditPreviewMode.currentEditPreviewMode(state);
        const analysisRequested = selectors.isAnalyzing(state);
        if (currentPreviewMode === 'axeAnalyzerView' && analysisRequested) {
            try {
                const locale = globalRegistry.get('frontendConfiguration').get('Prgfx.Neos.AxeCore:axeCoreTranslations');
                const runOptions = globalRegistry.get('frontendConfiguration').get('Prgfx.Neos.AxeCore:runOptions') || undefined;
                const report = yield generateReport(runOptions, locale || undefined);
                yield put(actions.setReport(contextPath, report));
            } catch (e) {
                yield put(actions.setReport(contextPath, null));
                yield put(neosActions.UI.FlashMessages.add('axe-core-generateReport', e.message, 'error'));
            }
        }
    });
    // when finished restore the previous edit mode
    yield takeLatest(actionTypes.SET_REPORT, function* () {
        if (previousPreviewMode && previousPreviewMode !== targetPreviewMode) {
            yield put(neosActions.UI.EditPreviewMode.set(previousPreviewMode));
        }
    });
}
