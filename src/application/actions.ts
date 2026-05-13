import { Operator } from "../domain/types";

export type CalculatorAction =
| {type: 'DIGIT';  digit: string}
| {type: 'DECIMAL'}
| {type: 'OPERATOR'; opetator: Operator}
| {type: 'EQUALS'}
| {type: 'CLEAR'}
| {type: 'CLEAR_ENTRY'}
| {type: 'TOGGLE_SIGN'}
| {type: 'PERCENT'};
