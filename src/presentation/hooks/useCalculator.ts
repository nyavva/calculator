import { useCallback, useMemo, useReducer } from "react";
import { calculatorReducer } from "../../application/reducer";
import { formatExpession } from "../../domain/engine";
import { INITIAL_STATE, Operator } from "../../domain/types";

export type CalculatorController = {
    display: string;
    expression: string;
    error: string | null;
    inputDigit: (digit: string) => void;
    inputDecimal: () => void;
    inputOperator: (op: Operator) => void;
    evaluate: () => void;
    clear: () => void;
    clearEntry: () => void;
    toggleSign:() => void;
    percent: () => void;
};
export const useCalculator = (): CalculatorController => {
    const [state, dispatch] = useReducer(calculatorReducer, INITIAL_STATE);
    const handlers = useMemo(
        () => ({
            inputDigit: (digit: string) => dispatch({type: 'DIGIT', digit}),
            inputDecimal: () => dispatch({type: 'DECIMAL'}),
            inputOperator: (operator: Operator) => dispatch({ type: 'OPERATOR', operator}),
            evaluate:() => dispatch({type: 'EQUALS'}),
            clear: () => dispatch({type: 'CLEAR'}),
            clearEntry: () => dispatch({type: "CLEAR_ENTRY"}),
            toggleEntry: () => dispatch({type: 'CLEAR_ENTRY'}),
            toggleSign: () => dispatch({type: 'TOGGLE_SIGN'}),
            percent: () => dispatch({type: 'PERCENT'}),

        }),
        [],
    );
    const expression = useCallback(() => formatExpession(state), [state]);

    return {
        display: state.display,
        expression: expression(),
        error: state.error,
        ...handlers,
    };

};