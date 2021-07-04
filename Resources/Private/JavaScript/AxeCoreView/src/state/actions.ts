import { AxeResults, RunOptions } from 'axe-core';

export const actionTypes = {
    ANALYZE: 'Prgfx.Neos.AxeCore:Analyze' as const,
    SET_REPORT: 'Prgfx.Neos.AxeCore:SetReport' as const,
    POPOUT: 'Prgfx.Neos.AxeCore:Popout' as const,
    POPIN: 'Prgfx.Neos.AxeCore:Popin' as const,
};

export type AxeCoreAnalyzeAction = {
    type: typeof actionTypes.ANALYZE,
    contextPath: string,
    runOptions?: RunOptions,
};
export type AxeCoreSetReportAction = {
    type: typeof actionTypes.SET_REPORT,
    contextPath: string,
    report: AxeResults,
};

export type AxeCoreViewAction =
    | AxeCoreAnalyzeAction
    | AxeCoreSetReportAction
    | { type: typeof actionTypes.POPOUT }
    | { type: typeof actionTypes.POPIN }

export const actions = {
    analyze: (contextPath: string, runOptions?: RunOptions): AxeCoreViewAction =>
        ({ type: actionTypes.ANALYZE, contextPath, runOptions }),
    setReport: (contextPath: string, report: AxeResults): AxeCoreViewAction =>
        ({ type: actionTypes.SET_REPORT, contextPath, report }),
    popout: (): AxeCoreViewAction => ({ type: actionTypes.POPOUT }),
    popin: (): AxeCoreViewAction => ({ type: actionTypes.POPIN }),
};
