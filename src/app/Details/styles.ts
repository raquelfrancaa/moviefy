import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    containerDetails: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },

    imageContainer: {
        height: 350,
        width: '100%',
        position: 'relative'
    },

    posterImage: {
        width: '100%',
        height: '100%'
    },

    buttonReturn: {
        position: 'absolute',
        top: 50,
        left: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(30,42,68,0.6)',
        padding: 10
    },

    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%'
    },

    detailsContent: {
        padding: 20
    },

    infoTitle: {
        fontSize: 28,
        fontWeight: 700,
        color: '#000000',
        marginBottom: 10
    },

    infoMedia: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    infoDate: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 400
    },

    rating: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        gap: 5,
    },

    ratingText: {
        color: '#FFD700',
        fontSize: 14,
        fontWeight: 400
    },

    sinopseContainer: {
        marginVertical: 15
    },

    titleInfo: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 700,
        marginBottom: 5
    },

    textSinopse: {
        color: '#000000',
        fontWeight: 400,
        fontSize: 16,
        textAlign: 'justify'
    },

    otherInfoContainer: {
        marginBottom: 20
    },

    otherInfoText: {
        color: '#0F0F0F',
        fontWeight: 400,
        fontSize: 14,
        marginTop: 10
    }

})
