export interface Product {
  id: string
  name: string
  description: string
  price: number
  priceDisplay: string
  image: string
  category: 'merch' | 'game'
  requiresShipping: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartStore {
  items: CartItem[]
  isOpen: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar?: string
  content: string
  rating: number
}

export interface GameDownload {
  platform: 'windows' | 'mac'
  label: string
  url: string
  size: string
}

export interface GameMetadata {
  title: string
  version: string
  price: string
  downloads: GameDownload[]
}
