import AxeCore, { AxeResults, Locale, RunOptions } from 'axe-core';
import { getGuestFrameWindow } from './guest-frame/util';
import { SynchronousRegistry } from '@neos-project/neos-ui-extensibility';

const impactValues = {
    'minor': 0,
    'moderate': 1,
    'serious': 2,
    'critical': 3,
};

export const sortByImpact = <T extends {impact?: keyof typeof impactValues | null}>(items: T[]): T[] =>
    [ ...items ].sort((a, b) => (impactValues[b.impact] ?? -1) - (impactValues[a.impact] ?? -1));

export const featureEnabled = (frontendConfiguration: Record<string, any> | SynchronousRegistry<any>) => (feature: string): boolean => {
    const configKey = 'Prgfx.Neos.AxeCore:features';
    if (typeof frontendConfiguration['get'] === 'function') {
        return frontendConfiguration.get(configKey)?.[feature];
    }
    return !!frontendConfiguration[configKey]?.[feature];
};

declare global {
    interface Window {
        axe?: typeof AxeCore;
    }
}

export const generateReport = (runOptions?: RunOptions, locale?: Locale): Promise<AxeResults> => {
    try {
        const guestFrameWindow = getGuestFrameWindow();
        if (!guestFrameWindow) {
            throw new Error('Could not get guest-frame window');
        }
        if (!guestFrameWindow.axe) {
            throw new Error('axe-core not found in guest-frame');
        }
        if (locale) {
            guestFrameWindow.axe.configure({ locale });
        }
        return guestFrameWindow.axe.run(runOptions)
            .then(report => {
                const memo = {};
                [ 'passes', 'violations', 'incomplete', 'inapplicable' ].forEach(resultType => {
                    if (!report[resultType]) {
                        return;
                    }
                    for (let j = 0; j < report[resultType].length; j++) {
                        if (!report[resultType][j].nodes) {
                            return;
                        }
                        for (let i = 0; i < report[resultType][j].nodes.length; i++) {
                            report[resultType][j].nodes[i].contentElement = report[resultType][j].nodes[i].target.map(selector => {
                                if (!memo[selector]) {
                                    const targetNode = guestFrameWindow.document.querySelector(selector);
                                    if (!targetNode) {
                                        return memo[selector] = null;
                                    }
                                    const contentNode = targetNode.closest('[data-__neos-node-contextpath]');
                                    if (!contentNode) {
                                        return memo[selector] = null;
                                    }
                                    const contextPath = contentNode.getAttribute('data-__neos-node-contextpath');
                                    const fusionPath = contentNode.getAttribute('data-__neos-fusion-path');
                                    let fusionPrototype;
                                    if (fusionPath) {
                                        const prototypeNames = fusionPath.match(/<([^>]+)>/g);
                                        if (prototypeNames) {
                                            fusionPrototype = prototypeNames.pop().slice(1, -1);
                                        }
                                    }
                                    return memo[selector] = {
                                        contextPath,
                                        fusionPath,
                                        fusionPrototype,
                                    };
                                }
                                return memo[selector];
                            });
                        }
                    }
                });
                return report;
            });
    } catch (e) {
        return Promise.reject(e);
    }
};
