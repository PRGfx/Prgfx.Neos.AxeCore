export type ContentElementInfo = {
    contextPath: string,
    fusionPath: string | null,
    fusionPrototype: string | null,
}

declare module 'axe-core' {
    interface NodeResult {
        contentElement: Array<ContentElementInfo | null>;
    }
}
