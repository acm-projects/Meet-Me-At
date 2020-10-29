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
    darkGrayBackground: {
        backgroundColor: '#D0D0D0'
    },
    //fonts
    SFProText_Bold: {
        fontFamily: "SFProText-Bold"
    },
    SFProText_Heavy: {
        fontFamily: "SFProText-Heavy",
    },
    SFProText_Regular: {
        fontFamily: "SFProText-Regular",
    },
    SFProDisplay_Bold: {
        fontFamily: "SFProDisplay-Bold"
    },
    SFProText_Light: {
        fontFamily: "SFProText-Light"
    },
    darkText: {
        color: '#453F3E'
    },
    lightText: {
        color: '#D0D0D0'
    },
    darkHeader: {
        fontSize: 35, 
        fontFamily: 'SFProDisplay-Bold',
        marginBottom: 5,
        color: '#453F3E'
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