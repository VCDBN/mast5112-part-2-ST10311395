import React from "react";
import {Text, View} from 'react-native';

const HistoryScreen =() =>{
    return(
        <View style = {{
            height: '100%',
            backgroundColor: '#6495ed', 
            justifyContent: 'center',
            alignItems:'center',
        }}>

            <Text style={{fontSize:40, fontWeight:'bold', letterSpacing:5}}></Text>
        </View>
    );
};

export default HistoryScreen;