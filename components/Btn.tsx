import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type BtnProps = {
    title: string;
    onPress: () => void;
};

export default function Btn({
    title,
    onPress,
}: BtnProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btn}
        >
            <Text style={styles.textBtn}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#191970",
        borderRadius: 15,
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      textBtn: {
        color: "white",
        fontFamily: "serif",
        fontWeight: "bold",
        fontSize: 18,
      },
})