import { getAbsolutePositionOfElementInGuestFrame, getGuestFrameWindow } from './util';
import debounce from 'lodash.debounce';

const positionHighlighter = (highlighter: HTMLElement) => (targetElement: Element) => {
    const targetPosition = getAbsolutePositionOfElementInGuestFrame(targetElement);
    highlighter.style.top = `${targetPosition.top}px`;
    highlighter.style.left = `${targetPosition.left}px`;
    highlighter.style.width = `${targetPosition.width}px`;
    highlighter.style.height = `${targetPosition.height}px`;
    highlighter.style.display = 'block';
};

let eventHandler = null;

export const highlightElement = (selector: string | null): void => {
    const gfw = getGuestFrameWindow();
    if (!gfw) {
        return;
    }
    if (eventHandler) {
        gfw.removeEventListener('scroll', eventHandler);
        gfw.removeEventListener('resize', eventHandler);
    }
    const gfd = gfw.document;
    const highlighter = gfd.getElementById('prgfx-neos-axecore-elementhighlighter');
    if (selector === null) {
        if (highlighter) {
            highlighter.style.display = 'none';
        }
        return;
    }
    const targetElement = gfd.querySelector(selector);
    if (!targetElement) {
        return;
    }
    targetElement.scrollIntoView();
    const updatePosition = positionHighlighter(highlighter);
    eventHandler = debounce(() => updatePosition(targetElement));
    gfw.addEventListener('scroll', eventHandler);
    gfw.addEventListener('resize', eventHandler);
    eventHandler();
};
