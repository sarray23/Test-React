import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Button,
    Platform,
    TouchableOpacity,
    ScrollView

} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Welcome extends Component {
    NextFunction = () =>{
        this.props.navigation.navigate('Tabs');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.greenContainer}>
                    <Image
                        source={require('../../img/Welcome.png')}
                        width={250}
                        height={400}
                    />
                    <Image
                        style={styles.nextIcon}
                        source={require('../../img/logo.png')}
                        width={80}
                        height={80}

                    />
                </View>
                <View style={styles.explanationContainer}>
                    <Text style={styles.title}> Welcome
                    </Text>
                    <Text style={styles.text}> Welcome to this app where you'd find most active github users and you can check my profile. Enjoy!
                    </Text>
                    <TouchableOpacity
                        onPress={this.NextFunction}
                    >
                        <Image
                            style={styles.nextIcon}
                            source={require('../../img/next.png')}
                        />

                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        flexDirection: 'column',
        height:387
    },
    greenContainer: {
        flex: 0.6,
        backgroundColor: '#639DC3',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#11C879',
        paddingLeft:20,
    },
    icon: {
        width: 180,
        height: 180,
    },
    nextIcon:{
        width: 25,
        height: 25,
        ...Platform.select({
            android: {
                marginHorizontal:"90%",
            },
            ios: {
                marginHorizontal:"90%",

            },
        }),
    },
    img: {
        width: 100,
        height: 100,
    },

    explanationContainer: {
        flex: 0.4,
        flexDirection: 'column'
    },
    title: {
     //   fontFamily: 'ibmplex',
        alignSelf: 'center',

        marginTop:31,

        fontSize: 40,
        marginBottom: 28,
        //fontStyle: 'italic',
        color: '#639DC3',
        textShadowColor: '#639DC3',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 17,
       // fontFamily: 'ibmPlex',
        color: '#000000',
        marginHorizontal: 20,
        textAlign:'center',
        ...Platform.select({
            android: {
                marginBottom:20,
            },
            ios: {
                marginBottom:30,
            },
        }),
    },
    btnNext:{
        //marginTop:40,
        ...Platform.select({
            android: {
               // marginHorizontal:Screen.width-40,
            },
            ios: {
                //marginHorizontal:'90%',
               // marginHorizontal:Screen.width-40,

            },
        }),
    },
    TextContainer: {
        flexDirection:'row',
    }


})
