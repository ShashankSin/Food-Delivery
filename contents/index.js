export const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../assets/categories/icons8-pizza-96.png'),
  },
  {
    id: 2,
    name: 'Burger',
    image: require('../assets/categories/icons8-pizza-96.png'),
  },
  {
    id: 3,
    name: 'Italian',
    image: require('../assets/categories/icons8-pizza-96.png'),
  },
  {
    id: 4,
    name: 'Chinese',
    image: require('../assets/categories/icons8-pizza-96.png'),
  },
  {
    id: 6,
    name: 'Sweets',
    image: require('../assets/categories/icons8-pizza-96.png'),
  },
]

export const featured = {
  id: 1,
  title: 'Hot and Spicy',
  description: 'soft and tender fried chicken',
  restaurants: [
    {
      id: 1,
      name: 'Papa Johns',
      image: require('../assets/restaurants/n7yx-hero (1).jpg'),
      description: 'Hot and spicy pizzas',
      lng: 38.2145602,
      lat: -85.52242669,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'Pepperoni Pizza',
          image: require('../assets/dishes/download (1) (1).jpeg'),
          description: 'Hot and spicy pizzas',
          price: 100,
        },
        {
          id: 2,
          name: 'Pepperoni Pizza',
          image: require('../assets/dishes/download (2) (1).jpeg'),
          description: 'Hot and spicy pizzas',
          price: 100,
        },
        {
          id: 3,
          name: 'Pepperoni Pizza',
          image: require('../assets/dishes/download (2) (2).jpeg'),
          description: 'Hot and spicy pizzas',
          price: 100,
        },
      ],
    },
  ],
}
