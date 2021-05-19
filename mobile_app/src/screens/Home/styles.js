import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    Background: {
        flex: 1,
        resizeMode: "cover"
    },
    ContainerButton: {
        width: 300,
        backgroundColor: "#FA4A0C",
        padding: 10,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 30
    },
    TextButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default styles