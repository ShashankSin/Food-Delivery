import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
export default function CartIcon() {
  const navigation = useNavigation()
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row items-center justify-between mx-5 p-4 py-3 rounded-full shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgoroundColor: 'rgba(255,255,255,0.3)' }}
        >
          <Text className="font-extrabold text-lg text-white">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-lg text-white">
          View Cart
        </Text>
        <Text className="font-extrabold text-lg text-white">${23}</Text>
      </TouchableOpacity>
    </View>
  )
}
