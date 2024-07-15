import React from "react";
import type { PropsWithChildren } from "react";
import { View, StyleSheet} from "react-native";

import ScoreCard from "./ScoreCard";

type ScoreBoardProps = PropsWithChildren<{
    playerScoreO: number,
    playerScoreX: number
}>;

const ScoreBoard = ({playerScoreO, playerScoreX} : ScoreBoardProps) : React.JSX.Element => {
    return (
        <View style={styles.scoreContainer}>
            <ScoreCard title="Player O" playerScore={playerScoreO} />
            <ScoreCard title="Player X" playerScore={playerScoreX} />
        </View>
    );
};

const styles = StyleSheet.create({
    scoreContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});

export default ScoreBoard;