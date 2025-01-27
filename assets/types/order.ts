import { Product } from './product'

export type OrderStatus = 'Pending' | 'Completed' | 'Shipped' | 'InTransit'

export type Order = {
  id: string
  slug: string
  details: string
  status: OrderStatus
  date: string
  items: Product[]
}
