import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import Colors from "../../Statics/Colors.json"
const widthScreen = Dimensions.get("window").width
const heightScreen = Dimensions.get("window").height

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.containerBtns}>
                <TouchableOpacity style={styles.btn}
                onPress={()=>{
                    props.navigation.navigate("QuranList")
                }}
                >
                    <Text style={styles.btnTitle}>القرآن الكريم</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>الأذكار</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>المسبحة</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.white
    },
    containerBtns: {
        paddingTop: "5%",
        flexDirection: "row",
        paddingHorizontal: "3%",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center"
    },
    btn: {
        width: widthScreen * .45,
        height: 150,
        backgroundColor: Colors.primary,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:"1%",
        marginBottom:heightScreen*.05,
        shadowColor:"#000",
        shadowOffset:{
            width:100,
            height:20
        },
        shadowOpacity:1,
        elevation:8,
        // paddingHorizontal:widthScreen*.1,
        // height:heightScreen*.15,
        borderRadius:5
    },
    btnTitle:{
        color:Colors.titles,
        fontSize:23,
        fontWeight:"700",

    }
})