import React from "react";
import type { PropsWithChildren } from "react";
import { FlatList, StyleSheet } from "react-native";

import GridItem from "./GridItem";

type GridListProps = PropsWithChildren<{
    gameState: string[],
    onChangeItem: (index: number) => void
}>;

const GridList = ({gameState, onChangeItem} : GridListProps) : React.JSX.Element => {
    return (
        <FlatList 
            horizontal={false}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={gameState}
            style={styles.grid}
            renderItem={({item, index}) => (
                <GridItem 
                    item={item} 
                    index={index} 
                    onChangeItem={onChangeItem} 
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    grid: {
        marginHorizontal: 12,
        marginTop: 12,
        marginBottom : 24
    },
});

export default GridList;