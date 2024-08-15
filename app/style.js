import { Dimensions, StyleSheet } from "react-native";

const size = Dimensions.get('window').width

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },

    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    carouselContainer: {
        justifyContent: 'center',
    },

    image: {
        alignSelf: 'center',
        width: 350,
        height: 320,
        resizeMode: 'contain'
    },

    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },

    overviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    overviewItem: {
        justifyContent: 'center',
        width: '48%',
    },

    overviewIcon: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10
    },

    weeklyIntakeContainer: {
        justifyContent: 'center',
        marginBottom: 10,
    },

    weeklyIntakeImage: {
        justifyContent: 'center',
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },

    nextStepsContainer: {
        justifyContent: 'center',
        marginBottom: 10,
    },

    nextStepsImage: {
        justifyContent: 'center',
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    reminderContainer: {
        marginVertical: 20,
    },

    reminderItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    bullet: {
        fontSize: 16,
        marginRight: 10,
        marginTop: 2,
        color: '#FFCC00',
    },

    reminderText: {
        justifyContent: 'center',
        fontSize: 16,
        lineHeight: 24,
        color: '#5A6E76',
    },
});

