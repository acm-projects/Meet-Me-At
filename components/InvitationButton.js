import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles'

export default function InvitationButton({ eventTitle, eventDate, onPress, style }){
    return (
        <TouchableOpacity onPress={onPress} delayPressIn={0}>
            <View style={[{padding: 10}, style]}>
                <Text style={[globalStyles.darkText, {fontSize: 22, fontFamily: "SFProDisplay-Medium"}]}>{ eventTitle }</Text>
                <Text style= {{color: '#d0d0d0', fontSize: 16, fontFamily: "SFProDisplay-Regular"}}>{ eventDate }</Text>
            </View>
        </TouchableOpacity>
    )
}
