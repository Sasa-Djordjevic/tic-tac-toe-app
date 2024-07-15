import React from "react";
import type { PropsWithChildren } from "react";
import { View, Text, StyleSheet} from "react-native";

import { Colors } from "../../constants/colors";

type ScoreCardTitleProps = PropsWithChildren<{
    title: string
}>;

const ScoreCardTitle = ({title}: ScoreCardTitleProps) : React.JSX.Element => {

    const customStyle = title === "Player O" ? {backgroundColor: Colors.primaryYellow} : {backgroundColor: Colors.primaryBlue};

    return (
        <View style={[styles.scoreTitle, customStyle]}>
            <Text style={styles.gameTurnTxt}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    scoreTitle: {
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: Colors.borderDark,
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    gameTurnTxt: {
        fontSize: 20,
        color: Colors.primaryWhite,
        fontWeight: '600',
    }
});

export default ScoreCardTitle;