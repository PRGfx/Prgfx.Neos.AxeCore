import { $get } from 'plow-js';
import { AxeResults } from 'axe-core';

export const isAnalyzing = (state: any): boolean =>
    !!$get([ 'plugins', 'axeCoreView', 'analysisRequested' ], state);
export const getReport = (state: any) => (contextPath: string): AxeResults | null =>
    $get([ 'plugins', 'axeCoreView', 'reports', contextPath ], state);
export const isPoppedOut = (state: any): boolean =>
    $get([ 'plugins', 'axeCoreView', 'isPoppedOut' ], state);
