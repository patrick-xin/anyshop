export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  inventory: number
  createdAt: Date
  updatedAt: Date
}

export interface CartItem extends Product {
  quantity: number
}

export interface Category {
  id: string
  name: string
  description: string
  slug: string
}