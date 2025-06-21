import { useContext } from 'react';
import { NeosContext } from '@neos-project/neos-ui-decorators';

export type Registry = {
    get<T = Registry>(key: string): T;
    set<T = unknown>(key: string, value: T, position?: string): void;
}

export type GlobalNeos = {
    globalRegistry: Registry;
}

export const useNeos = (): GlobalNeos => {
    return useContext(NeosContext) as GlobalNeos;
};