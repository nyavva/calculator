import { Operator } from "./types";

const MAX_DISPLAY_DIGITS = 12;

export const formatDisplay = (n: number): string => {
    if(!Number.isFinite(n)) return 'Error';
    if ( n === 0) return '0';
    let s = n.toPrecision(MAX_DISPLAY_DIGITS);
    
    if (s.includes('e')){
        return s.replace('e+', 'e').replace(/\.?0+e/,'e');
    }
        if (s.includes('.')){
        s = s.replace(/0+$/, ' ').replace(/\.$/,' ');
    }
    
    return s;
};
export const operatorSymbol = (op: Operator): string => {
    switch (op){
    case "+":
        return "+";
      case "-":
        return "-";
      case "*":
        return "*";
      case "/":
        return "/";
    }
}
