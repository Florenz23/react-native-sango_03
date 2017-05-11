import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default class SecondTabScreen extends Component{
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.content}>

                    {/* START NEW CODE */}

                    <View style={styles.messageBox}>
                        <View>
                            <Text style={styles.messageBoxTitleText}>A simple mesage</Text>
                        </View>
                        <View>
                            <Text style={styles.messageBoxBodyText}>This is just a dummy sample it will help us to see the alignment in action.</Text>
                        </View>
                    </View>

              {/* END NEW CODE */}

                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({


   // …
    content:{
        backgroundColor:'#ebeef0',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    messageBox:{
        backgroundColor:'#ef553a',
        width:300,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10
    },
    messageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    messageBoxBodyText:{
        color:'#fff',
        fontSize:16
    },
});
