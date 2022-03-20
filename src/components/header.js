import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from "../Statics/Colors.json"
const Header = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>{name ? name : "Header"}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    titleHeader: {
        color: Colors.titles,
        fontSize: 22,
        fontWeight: "700",
        fontFamily: "serif"
    }
})