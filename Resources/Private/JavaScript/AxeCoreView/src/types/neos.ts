declare module '@neos-project/utils-redux';
declare module '@neos-project/neos-ui-redux-store';
declare module '@neos-project/neos-ts-interfaces' {
    export interface I18nRegistry {
        translate: (id?: string, fallback?: string, params?: any, packageKey?: string, sourceName?: string) => string;
    }
}
