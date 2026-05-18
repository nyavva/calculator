import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

type Props = {
    value: string;
    expression: string;
    errored: boolean;
};

export const Display = ({value, expression,errored}: Props) => (
    <View style={styles.container}>
        < Text style ={styles.expression} numberOfLines={1}>
            {expression}
        </Text>
        <Text
            style = {[styles.value, errored && styles.ErrorValue]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.4}
        >
            {value}
        </Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingBottom: 12,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

    },
    expression:{
        color: theme.display.expression,
        fontSize: 22,
        minHeight: 26,
    },
    value: {
        color: theme.display.primary,
        fontSize: 82,
        fontWeight:  '300',
    },
    ErrorValue:{
        color: '#b31b1b',
    }
});









