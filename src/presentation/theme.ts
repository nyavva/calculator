export const theme ={
    background: "#000000",
    display: {
        primary: "#FFFFFF",
        expression: "#9c9c9c",
    },
    button: {
        number:{ bg: '#333333', fg: '#ffffff'},
        operator: {bg: '#ff9f0a', fg: '#ffffff'},
        function:{bg: '#a5a5a5', fg: '#000000'},

    },
    spacing: 6,
} as const;

export type ButtonVariant = keyof typeof theme.button;
