import { PropsWithChildren } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type BMIOIcon = PropsWithChildren<{
    name?: string;
    nameSpace?: string;
}>;

export * from './actions'
export * from './navigation'
export * from './notifications'
