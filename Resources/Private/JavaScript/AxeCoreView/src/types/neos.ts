declare module '@neos-project/utils-redux';
declare module '@neos-project/neos-ui-redux-store';
declare module '@neos-project/neos-ts-interfaces' {
    export interface I18nRegistry {
        translate: (id?: string, fallback?: string, params?: unknown, packageKey?: string, sourceName?: string) => string;
    }
}
declare module '@neos-project/neos-ui-decorators' {
    export const NeosContext: React.Context<unknown>;
}