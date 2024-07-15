import React from "react";
import { View, Text, StyleSheet } from "react-native";

import type { PropsWithChildren } from "react";

import { Colors } from "../constants/colors";

type HeaderTitleProps = PropsWithChildren<{
    gameWinnerData: string,
    isCrossData: boolean
}>;

const HeaderTitle = ({gameWinnerData, isCrossData} : HeaderTitleProps) : React.JSX.Element => {
    return (
        <>
            {gameWinnerData ? (
                <View style={[styles.playerInfo, styles.winnerInfo]}>
                    <Text style={styles.winnerTxt}>{gameWinnerData}</Text>
                </View>
            ) : (
                <View style={[styles.playerInfo, isCrossData ? styles.playerX : styles.playerO]}>
                    <Text style={styles.gameTurnTxt}>Player {isCrossData ? "X" : "O"}'s Turn</Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    playerInfo: {
        height: 56,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 20,
        marginBottom: 12,
        marginHorizontal: 14,
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowColor: Colors.borderDark,
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
    },
    winnerInfo: {
        borderRadius: 8,
        backgroundColor: Colors.primaryGreen,
        shadowOpacity: 0.1,
    },
    winnerTxt: {
        fontSize: 20,
        color: Colors.primaryWhite,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    gameTurnTxt: {
        fontSize: 20,
        color: Colors.primaryWhite,
        fontWeight: '600',
    },
    playerX: {
        backgroundColor: Colors.primaryBlue,
    },
    playerO: {
        backgroundColor: Colors.primaryYellow,
    },
});

export default HeaderTitle;