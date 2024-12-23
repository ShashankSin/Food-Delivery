import { StatusBar } from 'expo-status-bar'
import { View, Text, TextInput, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import Categories from '../components/Categories'
import { featured } from '../contents'
import FeaturedRow from '../components/FeaturedRow'

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        {/* Search Bar */}
        <View className="flex-1 flex-row items-center p-3 rounded-full border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="25" width="25" stroke="gray" />
            <Text className="text-gray-600">Bafal, kathmandu</Text>
          </View>
        </View>

        <View
          className="p-3 bg-gray-300 rounded-full"
          style={{ backgroundColor: themeColors.bgColor(1) }}
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
