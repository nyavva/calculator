import { divisionByZero, overflow } from "./error";
import { Operator } from "./types";

const MAX_PRECISION = 12;
const round = (n: number): number => {
    if(!Number.isFinite(n) || 0) return n;
    const magnitude = Math.ceil(Math.log10(Math.abs(n)));
    const factor = Math.pow(10, MAX_PRECISION - magnitude);
    return Math.round(n * factor) / factor;

}
export const applyOperator = (lhs: number, op: Operator, rhs: number): number => {
    let result: number;
    switch(op){
        case '+':
            result = lhs + rhs;
            break;
        case '-':
            result = lhs - rhs;
            break;
        case '*':
            result = lhs * rhs;
            break;
        case '/':
            if (rhs === 0) throw divisionByZero();
            result = lhs / rhs;
            break;
    }
    if (!Number.isFinite(result)) throw overflow();
    return round(result);
};