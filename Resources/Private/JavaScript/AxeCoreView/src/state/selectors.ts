import { AxeResults } from 'axe-core';
import { BaseState } from './reducer';

export const isAnalyzing = (state: BaseState): boolean =>
    !!state.plugins?.axeCoreView?.analysisRequested;
export const getReport = (state: BaseState) => (contextPath: string): AxeResults | null =>
    state.plugins?.axeCoreView?.reports?.[contextPath] ?? null;
export const isPoppedOut = (state: BaseState): boolean =>
    state.plugins?.axeCoreView?.isPoppedOut === true;
