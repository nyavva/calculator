import { StyleSheet, useWindowDimensions, View } from "react-native";
import { CalculatorController } from "../hooks/useCalculator";
import { theme } from "../theme";
import { Button } from "./Button";

type Props = {ctl: CalculatorController};
const COLS = 4;

export const Keypad = ({ctl}: Props) => {
    const {width} = useWindowDimensions();
    const btnSize = (width - theme.spacing * 2 * COLS) / COLS;

    return (
        <View style={styles.grid}>
            <View style={styles.row}>
                <Button label="AC" variant="function" onPress={ctl.clear} height={btnSize} />
                <Button label="±" variant="operator" onPress={ctl.toggleSign} height={btnSize} />
                <Button label="%" variant="operator" onPress={ctl.percent} height={btnSize} />
                <Button label="÷" variant="operator" onPress={() => ctl.inputOperator("/")} height={btnSize} />
            </View>
            <View style = {styles.row}>
                <Button label="7" onPress={() => ctl.inputDigit('7')} height={btnSize} />
                <Button label="8" onPress={() => ctl.inputDigit('8')} height={btnSize} />
                <Button label="9" onPress={() => ctl.inputDigit('9')} height={btnSize} />
                <Button label="x" variant="operator" onPress={() => ctl.inputOperator("*")} height={btnSize} />
            </View>
            <View style={styles.row}>
                <Button label="4" onPress={() => ctl.inputDigit('4')} height={btnSize} />
                <Button label="5" onPress={() => ctl.inputDigit('5')} height={btnSize} />
                <Button label="6" onPress={() => ctl.inputDigit('6')} height={btnSize} />
                <Button label="-" variant="operator" onPress={() => ctl.inputOperator("-")} height={btnSize} />
            </View>
            <View style={styles.row}>
                <Button label="1" onPress={() => ctl.inputDigit('1')} height={btnSize} />
                <Button label="2" onPress={() => ctl.inputDigit('2')} height={btnSize} />
                <Button label="3" onPress={() => ctl.inputDigit('3')} height={btnSize} />
                <Button label="+" variant="operator" onPress={() => ctl.inputOperator("+")} height={btnSize} />
                
            </View>
            <View style={styles.row}>
                <Button label="0" flex={2} onPress={() => ctl.inputDigit('1')} height={btnSize} />
                <Button label="." onPress={() => ctl.inputDecimal} height={btnSize} />
                <Button label="=" variant="operator" onPress={() => ctl.evaluate} height={btnSize} />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    grid: {
        paddingHorizontal: theme.spacing,
        paddingBottom: theme.spacing * 2,
    },
    row: {
        flexDirection: 'row',
    },
});

