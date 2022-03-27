import styled from 'styled-components';

export * from './loading-spinner';
export * from './snackbar';


export const Tooltip = styled.div`
    position: relative;
    display: inline-block;
    &:hover {
        .tooltip {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const TooltipText = styled.div`
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 12px 0px 12px 0px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
`;

export const PinchedTooltip = styled.div`
position: relative;
padding: 15px;
margin: 50p 0 3em;
text-align: center;
background: #333;
color: #fff;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);

&::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    width: 100px;
    height: 20px;
    margin: 0 0 0 -50px;
    background: #333;
}

&::after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 50%;
    height: 20px;
    background: #fff;
    -webkit-border-bottom-right-radius: 15px;
    -moz-border-radius-bottomright: 15px;
    border-bottom-right-radius: 15px;
}

& > * {
    ::before {
        content: "";
    position: absolute;
    top: -20px;
    right: 0;
    width: 50%;
    height: 20px;
    background: #fff;
    -webkit-border-bottom-left-radius: 15px;
    -moz-border-radius-bottomleft: 15px;
    border-bottom-left-radius: 15px;
    }
}
`;

