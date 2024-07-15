import React from "react";
import type { PropsWithChildren } from "react";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

type AppContainerProps = PropsWithChildren<{
    children: React.ReactNode
}>;

const AppContainer = ({children} : AppContainerProps) : React.JSX.Element => {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <StatusBar barStyle="light-content" />
            <ScrollView style={styles.appContainer}>
                {children}
            </ScrollView>  
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundDark
    },
    appContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundDark
    }
});

export default AppContainer;