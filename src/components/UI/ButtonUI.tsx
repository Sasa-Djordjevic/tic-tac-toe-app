import React from "react";
import type { PropsWithChildren } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

type ButtonUIProps = PropsWithChildren<{
    gameWinner?: string,
    btnText: string,
    customStyle: "new" | "score",
    onPressFun: () => void
}>;

const ButtonUI = ({gameWinner, btnText, customStyle, onPressFun} : ButtonUIProps) : React.JSX.Element => {

    return (
        <Pressable
            onPress={onPressFun}
            style={[styles.gameBtn, customStyle === "new" ? styles.gameBtnNew : styles.gameBtnScore ]}
        >
            <Text style={styles.gameBtnText}>
              {gameWinner ? "Start New Game" : btnText}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    gameBtn: {
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 36,
    },
    gameBtnNew: {
        backgroundColor: Colors.primaryPurple
    },
    gameBtnScore: {
        backgroundColor: Colors.primaryPink,
        marginBottom: 50
    },
    gameBtnText: {
        fontSize: 18,
        color: Colors.primaryWhite,
        fontWeight: '500',
    }
});

export default ButtonUI;