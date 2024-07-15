import React from "react";
import type { PropsWithChildren } from "react";
import { Pressable, StyleSheet } from "react-native";

import Icons from "../Icons";
import { Colors } from "../../constants/colors";

type GridItemProps = PropsWithChildren<{
    item: string,
    index: number,
    onChangeItem: (index : number) => void
}>;

const GridItem = ({item, index, onChangeItem} : GridItemProps) : React.JSX.Element => {
    return (
        <Pressable 
            key={index}
            style={styles.card}
            onPress={() => onChangeItem(index)}
        >
            <Icons name={item} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 100,
        width: '33.33%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.borderDark,
    },
});

export default GridItem;