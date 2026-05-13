import { CalculatorError } from "./error";
import { formatDisplay, operatorSymbol } from "./format";
import { applyOperator } from "./operations";
import { CalculatorState, INITIAL_STATE, Operator } from "./types";

const MAX_INPUT_DIGITS = 12;

const parseDisplay = (s: string): number =>{
    const n = Number(s);
    return Number.isFinite(n) ? n: 0;
};

const countDigits = (s: string): number => s.replace(/[-.]/g,'').length;

const errorState = (e: unknown): CalculatorState => ({
    ...INITIAL_STATE,
    display: 'Error',
    error: e instanceof CalculatorError ? e.message : 'unknown error',
});

export const inputDigit = (s: CalculatorState, digit:string): CalculatorState => {
    if (s.error) return s;
    if (s.awaitingOperand) {
        return {...s, display: digit, awaitingOperand: false};
        }
    if (s.display === '0') return {...s, display: digit};
    if (s.display === '-0') return {...s, display: '-' + digit};
    if (countDigits(s.display) >= MAX_INPUT_DIGITS) return s;
    return{...s, display: s.display + digit};
}

export const inputDecimal =(s:CalculatorState, digit: string):
 CalculatorState =>{
    if (s.error) return s;
    if (s.awaitingOperand) {
        return {...s, display: digit, awaitingOperand: false};
    }
    if(s.display.includes('.')) return s;
    return {...s, display: s.display + '.'};

};

export const inputOperator = (s: CalculatorState, op: Operator): CalculatorState => {
    if(s.error) return s;
    
    if(s.awaitingOperand && s.previous !== null){
        return{...s, operation: op };
    }

    const current = parseDisplay(s.display);

    if (s.previous === null || s.operation === null){
        return {
            ...s,
            previous: current,
            operation: op,
            awaitingOperand: true,
        };
    }

    try {
        const result = applyOperator(s.previous, s.operation, current);
        return{
            ...s,
            display: formatDisplay(result),
            previous: result,
            operation: op,
            awaitingOperand: true,
        };
    } catch(e){
        return errorState(e);
    }
};
export const evaluate = (s: CalculatorState): CalculatorState => {
    if(s.error) return s;
    if(s.previous === null || s.operation === null) return s;
    
    const rhs = parseDisplay(s.display);
    try {
        const result = applyOperator(s.previous, s.operation, rhs);
        return {
            ...s,
            display: formatDisplay(result),
            previous: null,
            operation: null,
            awaitingOperand: true,
        };
    } catch(e) {
        return errorState(e);
    }
};

export const clear = (): CalculatorState => INITIAL_STATE;

export const clearEntry = (s:CalculatorState): CalculatorState =>{
    if(s.error) return INITIAL_STATE;
    return {...s, display: '0', awaitingOperand: false};
};


export const toggleSign = (s: CalculatorState): CalculatorState =>{
    if(s.error) return s;

    if(s.awaitingOperand ?? s.operation !== null){
        return {...s,display: "-0", awaitingOperand: false};
    }
    if (s.display === '0' || s.display === '0') return s;

    return {
        ...s,
        display: s.display.startsWith('-') ? s.display.slice(1) : '-' + s.display,
    };
};

export const percent = (s: CalculatorState): CalculatorState =>{
    if(s.error) return s;
    const current = parseDisplay(s.display);
    return {...s, display: formatDisplay(current/100)};

};

export const formatExpession = (s: CalculatorState): string =>{
    if(s.previous === null || s.operation === null) return '';
     const sym = operatorSymbol(s.operation);
     return s.awaitingOperand
     ? `${formatDisplay(s.previous)} ${sym}`
     : `${formatDisplay(s.previous)} ${sym} ${s.display}`;
};


