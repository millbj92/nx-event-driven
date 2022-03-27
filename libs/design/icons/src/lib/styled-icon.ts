import { PropsWithChildren } from 'react';
import styled from 'styled-components';


export type StyledIconProps = PropsWithChildren<{
    width?: string;
    height?: string;
    fill?: string;
    stroke?: string;
    style?: React.CSSProperties;
}>;
export const StyledIcon = styled.div<StyledIconProps>`
    & > svg {
    width: ${props => props.width};
    height: ${props => props.height};
    fill: ${props => props.fill};
    stroke: ${props => props.stroke};
    }
`;