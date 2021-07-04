// things not exported from the system package..
export const getGuestFrameWindow = (): Window | null => {
    const guestFrame = document.getElementsByName('neos-content-main')[0] as HTMLIFrameElement;
    return guestFrame && guestFrame.contentWindow;
};

const getGuestFrameDocument = (): Document | null =>
    getGuestFrameWindow()?.document;

const clampNumber = (n: number, min: number, max: number): [number, number] => {
    if (max < min) {
        max = min;
    }
    if (n < min) {
        return [ min, min - n ];
    }
    if (n > max) {
        return [ max, n - max ];
    }
    return [ n, 0 ];
};

const clampElementToDocumentDimensions = (elementDimensions: DOMRect, documentDimensions: DOMRect) => {
    const documentWidth = documentDimensions.width;
    const documentHeight = documentDimensions.height;
    const [ left, widthShrinkAmount ] = clampNumber(elementDimensions.left - documentDimensions.left, 0, documentWidth);
    const [ width ] = clampNumber(elementDimensions.width - widthShrinkAmount, 0, documentWidth - left);
    const [ top, heightShrinkAmount ] = clampNumber(elementDimensions.top - documentDimensions.top, 0, documentHeight);
    const [ height ] = clampNumber(elementDimensions.height - heightShrinkAmount, 0, documentHeight - top);

    return {
        top,
        left,
        width,
        height,
        right: left + width,
        bottom: top + height,
        rightAsMeasuredFromRightDocumentBorder: documentWidth - (left + width),
    };
};

export const getAbsolutePositionOfElementInGuestFrame = (element: Element): {top: number, left: number, width: number, height: number} => {
    if (element && element.getBoundingClientRect) {
        const relativeDocumentDimensions = getGuestFrameDocument().documentElement.getBoundingClientRect();
        const relativeElementDimensions = element.getBoundingClientRect();
        return clampElementToDocumentDimensions(relativeElementDimensions, relativeDocumentDimensions);
    }
    return { top: 0, left: 0, width: 0, height: 0 };
};
