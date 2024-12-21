import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import DishRow from '../components/DishRow'
import { useNavigation } from '@react-navigation/native'
import CartIcon from '../components/CartIcon'
import { StatusBar } from 'expo-status-bar'
export default function RestaurantScreen() {
  const { params } = useRoute()
  const navigation = useNavigation()
  let item = params
  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="h-72 w-full" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6 "
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row items-center space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Text className="text-xs text-gray-400">⭐</Text>
                <Text className="text-xs text-green-700">{item.stars}</Text>
                <Text className="text-xs text-gray-700">
                  ({item.reviews} Reviews).{' '}
                  <Text className="font-semibold"> {item.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin height="15" width="15" stroke="gray" />
                <Text className="text-xs text-gray-700">
                  {' '}
                  Nearby. {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* Dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
