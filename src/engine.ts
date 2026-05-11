export class CalculatorError extends Error{
     readonly code: string;

     constructor(code: string, message: string) {
        super(message);
        this.name = 'CalculatorError';
        this.code = code;

     }
}
export const divisionByZero = (): CalculatorError =>
    new CalculatorError('DIV_BY_ZERO', 'Cannot divide by zero');

export const overflow = (): CalculatorError =>
    new CalculatorError('OVERFLOW', 'Result is out of range');

