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
                <Button label="±" variant="function" onPress={ctl.toggleSign} height={btnSize} />
                <Button label="%" variant="function" onPress={ctl.percent} height={btnSize} />
                <Button label="÷" variant="function" onPress={() => ctl.inputOperator("/")} height={btnSize} />
            </View>
        </View>
    )




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

