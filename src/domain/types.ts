export type Operator = '+' | '-'| '*' | '/';

export type CalculatorState = Readonly<{
    display: string;
    previous: number | null;
    operation: Operator | null;
    awaitingOperand: boolean;
    error: string | null;

}>;

export const INITIAL_STATE: CalculatorState = Object.freeze({
    display: '0',
    previous: null,
    operation: null,
    awaitingOperand: false,
    error: null,

});
