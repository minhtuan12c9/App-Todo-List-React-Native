import { StyleSheet } from 'react-native';

import color from '../../contains/color';

const styles = StyleSheet.create({
    addTask:{
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between', // cách đều 2 bên
        alignItems: 'center',
    },
    input:{
        height: 44,
        width: '82%',
        backgroundColor: color.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: color.primary,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    iconWrapper:{
        width: 50,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: color.background,
    },
    icon:{
        fontSize: 24,
        color: color.white,
    },
})

export default styles;