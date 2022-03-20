import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native'
import React from 'react'
import Header from '../../components/header'
import Colors from "../../Statics/Colors.json"
import quranList from "../../helper/quranList.json"

const widthScreen = Dimensions.get("window").width
const heightScreen = Dimensions.get("window").height
const QuranList = (props) => {
    return (
        <View style={styles.container}>
            <Header name="القرآن الكريم" />
            <FlatList
           
                data={quranList}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.btn}
                    onPress={()=>{
                        props.navigation.navigate("surah",{id:item.id,name:item.name})
                    }}
                    >
                        <View style={styles.headBtn}>
                            <View style={styles.boxTitle}>
                                <Text style={styles.titleBtn}>{item.transliteration}</Text>
                            </View>
                            <View style={styles.boxTitle}>
                                <Text style={styles.titleBtn}>{item.name}</Text>
                                <Text style={styles.titleBtn}>الإسم :  </Text>
                            </View>
                        </View>
                        <View style={styles.boxTitle}>
                            <Text style={[styles.titleBtn,{fontSize:15}]}>{item.type == "meccan" ? "مكية" : "مدنية"}</Text>
                            <Text style={[styles.titleBtn,{fontSize:15}]}>النوع :  </Text>
                        </View>
                        <View style={styles.boxTitle}>
                            <Text style={[styles.titleBtn,{fontSize:15}]}>{item.total_verses}</Text>
                            <Text style={[styles.titleBtn,{fontSize:15}]}> verses </Text>
                        </View>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

export default QuranList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignContent:"center"
    },
    btn: {
        width: "98%",
        paddingVertical: heightScreen * .03,
        backgroundColor: Colors.white,
        marginTop: 5,
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
        alignItems: "center",
        paddingHorizontal:widthScreen*.05,
        borderRadius:10,
        elevation:5,
        alignSelf:"center"
    },
    titleBtn: {
        fontFamily: "serif",
        fontSize: 20,
        
    },
    boxTitle: {
        // backgroundColor:"#456",
        // width: widthScreen * .40,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: "2%"
    },
    headBtn:{
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent:"space-between"
    }
})