import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Display } from '../components/Display';
import { Keypad } from '../components/Keypad';
import { useCalculator } from '../hooks/useCalculator';
import { theme } from '../theme';

export const CalculatorScreen = () => {
    const ctl = useCalculator();

    return(
        <SafeAreaView style = {styles.safe} edges={['top', 'bottom', 'left', 'right']}>
            <StatusBar barStyle={'light-content'} backgroundColor={theme.background}/>
            <View style={styles.container}>
                <View style={styles.spacer}/>
                <Display value={ctl.display} expression={ctl.expression} errored={ctl.error !== null} />
                <Keypad ctl={ctl}/>

            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: theme.background,
    },
    container:{
        flex: 1,
        backgroundColor: theme.background,
        justifyContent: 'flex-end',
    },
    spacer: {
        flex: 1,
    },
});