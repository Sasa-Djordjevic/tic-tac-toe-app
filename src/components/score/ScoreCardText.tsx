import React from "react";
import type { PropsWithChildren } from "react";
import { View, Text, StyleSheet} from "react-native";

import { Colors } from "../../constants/colors";

type ScoreCardTextProps = PropsWithChildren<{
    playerScore: number
}>;

const ScoreCardText = ({playerScore} : ScoreCardTextProps) : React.JSX.Element => {
    return (
        <View style={styles.score}>
            <Text style={styles.scoreText}>{playerScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    score: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.borderDark,
    },
    scoreText: {
        fontSize: 32,
        color: Colors.primaryGreen
    }
});

export default ScoreCardText;