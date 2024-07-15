import React from "react";
import type { PropsWithChildren } from "react";
import { View, StyleSheet} from "react-native";

import ScoreCardTitle from "./ScoreCardTitle";
import ScoreCardText from "./ScoreCardText";

type ScoreCardProps = PropsWithChildren<{
    title: string,
    playerScore: number
}>;

const ScoreCard = ({title, playerScore} : ScoreCardProps) : React.JSX.Element => {
    return (
        <View style={styles.scoreCard}>
            <ScoreCardTitle title={title} />
            <ScoreCardText playerScore={playerScore} />
        </View>
    );
};

const styles = StyleSheet.create({
    scoreCard: {
        width: "30%",
        marginTop: 48,
        marginBottom: 24
    },
});

export default ScoreCard;