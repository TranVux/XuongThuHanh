import { View, Text } from 'react-native'
import React from 'react'

const Spacing = ({ space }) => {
    return (
        <View style={{ width: space ? space : 10, height: space ? space : 10 }} />
    )
}

export default Spacing