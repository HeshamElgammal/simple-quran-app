import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    ImageBackground
} from 'react-native'
import React from 'react'
import Header from '../../components/header'
import Colors from "../../Statics/Colors.json"
import quran from "../../helper/quran.json"
const widthScreen = Dimensions.get("window").width
const heightScreen = Dimensions.get("window").height
const Surah = (props) => {

    return (
        <View>
            <Header name={props.route.params.name} />
            <FlatList
                data={quran[props.route.params.id]}
                renderItem={({ item, index }) => (
                    <View style={styles.Box}>
                        <View>
                            <ImageBackground
                                source={require("../../Statics/imgs/verses.png")}
                                style={{
                                    width: 40,
                                    height: 50,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Text>{item.verse}</Text>
                            </ImageBackground>
                        </View>
                        <View style={{ width: "85%" }}>
                            <Text style={styles.title}>
                                {item.text}
                            </Text>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Surah

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignContent: "center"
    },
    Box: {
        borderBottomWidth: .8,
        padding: 5,
        borderBottomColor: Colors.primary,
        flexDirection: "row",
        textAlign: "flex-start",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        letterSpacing: 1,

    }
})