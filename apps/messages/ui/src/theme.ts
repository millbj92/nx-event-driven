import {BaseTheme} from '@super-rad-poc/design/styles';


const Theme = {
    ...BaseTheme,
    colors: {
        ...BaseTheme.colors,
        primary: '#00bcd4',
        secondary: '#ff9800',
        accent: '#9c27b0',
        error: '#f44336',
        warning: '#ffeb3b',
        info: '#2196f3',
        success: '#4caf50',
    },
};

export {
    Theme
}