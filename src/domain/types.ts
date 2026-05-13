export type Operator = '+' | '-'| '*' | '/';

export type CalculatorState = Readonly<{
    display: string;
    previous: number | null;
    operation: Operator | null;
    awaitingOperand: boolean;
    error: string | null;
    

}>;