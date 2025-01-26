import { ImageSourcePropType } from 'react-native'

export type CartItem = {
  id: number
  title: string
  heroImage: ImageSourcePropType
  price: number
  quantity: number
  maxQuantity: number
}
