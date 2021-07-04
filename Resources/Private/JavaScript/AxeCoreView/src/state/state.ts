import { AxeResults } from 'axe-core';

export type AxeCoreViewState = {
    reports: Record<string, AxeResults | null>,
    analysisRequested: false | string,
    isPoppedOut: boolean,
};

export const defaultState: AxeCoreViewState = {
    reports: {},
    analysisRequested: false,
    isPoppedOut: false,
};
