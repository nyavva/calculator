import { Pressable, StyleSheet, Text } from "react-native";
import { ButtonVariant, theme } from "../theme";


type Props ={
    label: string;
    onPress: () => void;
    variant?: ButtonVariant;
    flex?: number;
    height: number;
};

export const Button = ({
    label,
    onPress,
    variant = 'number',
    flex = 1,
    height,
}: Props) => {
    const pallete = theme.button[variant];
    const isWide = flex > 1;

    return (
       <Pressable
            onPress={onPress}
            style={({pressed}) => [
                styles.base,
                {
                    flex,
                    height,
                    backgroundColor: pallete.bg,
                    opacity: pressed ? 0.7 : 1,
                    paddingLeft:isWide ? height * 0.4 : 0,
                    alignItems: isWide ? 'flex-start' : 'center',
                },
            ]}
       accessibilityRole="button"
       accessibilityLabel={label}
       >
         <Text style={[styles.label, {color: pallete.fg}]}>{label}</Text>
       </Pressable>
    );
};

const styles = StyleSheet.create({
    base: {
        margin: theme.spacing,
        borderRadius: 999,
        justifyContent: 'center',

    },
    label: {
        fontSize: 34,
        fontWeight: '400',
    },

});
