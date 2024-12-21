import { use, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
export default function OrderPreparingScreen() {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 3000)
  }, [])
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={require('../assets/Delivery.gif')} className="h-80 w-80" />
    </View>
  )
}
