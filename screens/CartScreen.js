import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native'
import { featured } from '../contents'
export default function CartScreen() {
  const navigation = useNavigation()
  const restaurant = featured.restaurants[0]
  return (
    <View className="bg-white flex-1">
      {/* backbutton */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 left-2 top-10 p-1 rounded-full"
        >
          <Icon.ArrowLeft
            strokeWidth={2}
            stroke="white"
            height={20}
            width={20}
          />
        </TouchableOpacity>
        <View>
          <Text className="text-center text-lg font-bold">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      {/* Delivery Time */}
      <View style={{ backgroundColor: themeColors.bgColor(0.2) }}>
        <View className="flex-row items-center px-4">
          <Image
            source={require('../assets/delivery.png')}
            className="h-20 w-20 rounded-full"
          />
          <Text className="flex-1 pl-4">Delivery in 30-40 minutes</Text>
          <TouchableOpacity>
            <Text className="font-bold" style={{ color: themeColors.text }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {restaurant.dishes.map((dish, index) => (
          <View
            key={index}
            className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
          >
            <Text className="font-bold" style={{ color: themeColors.text }}>
              2 x
            </Text>
            <Image className="h-14 w-14 rounded-full" source={dish.image} />
            <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
            <Text className="font-semibold text-base">${dish.price}</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                stroke="white"
                height={20}
                width={20}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* Totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">SubTotal</Text>
          <Text className="text-gray-700">$200</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery</Text>
          <Text className="text-gray-700">$23</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">$30</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderPreparing')}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-center text-white font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
