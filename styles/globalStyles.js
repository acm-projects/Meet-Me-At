import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainBackground: {
        backgroundColor: '#FCFCFC'
    },
    //fonts
    SFProText_Bold: {
        fontFamily: "SFProText-Bold"
    },
    darkText: {
        color: '#453F3E'
    },
    lightText: {
        color: '#D0D0D0'
    },
    subTitle: {
        color: '#453F3E',
        fontFamily: 'SFProText-Regular',
        fontSize: 16
    },
    textBody: {
        fontFamily: "SFProDisplay-Medium", 
        fontSize: 14,
    },
    input: {
        borderBottomColor: '#D0D0D0',
        borderBottomWidth: 1,
        paddingLeft: 5,
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 10
    },
});