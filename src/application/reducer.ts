import * as engine from '../domain/engine';

import { CalculatorState } from "../domain/types";
import { CalculatorAction } from "./actions";


export const calculatorReducer = (
    state: CalculatorState, 
    action: CalculatorAction, 
): CalculatorState => {
    switch(action.type){
        case "DIGIT":
            return engine.inputDigit(state, action.digit);
        case 'DECIMAL':
            return engine.inputDecimal(state);
        case 'OPERATOR':
            return engine.inputOperator(state, action.opetator);
        case 'EQUALS':
            return engine.evaluate(state);
        case 'CLEAR':
            return engine.clear();
        case 'CLEAR_ENTRY':
            return engine.clearEntry(state);
        case 'TOGGLE_SIGN':
            return engine.toggleSign(state);
        case 'PERCENT':
            return engine.percent(state);
    }
};
