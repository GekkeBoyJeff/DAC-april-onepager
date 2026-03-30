// Rick Roll Easter Egg
export const RICKROLL_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

// Product pricing (in euros)
export const PRODUCTS = {
  AMELIA_FIGURE: {
    id: 'amelia-figure',
    name: 'Amelia NSFW Figure',
    price: 150,
    priceDisplay: '€150',
  },
  AMELIA_BODY_PILLOW: {
    id: 'amelia-body-pillow',
    name: 'Amelia Body Pillow (Pillow + Cover)',
    price: 80,
    priceDisplay: '€80',
  },
  AMELIA_DATING_SIM: {
    id: 'amelia-dating-sim',
    name: 'Amelia AI Dating Sim',
    price: 3,
    priceDisplay: '€3,00',
  },
  DAC_TRADING_COIN: {
    id: 'dac-trading-coin',
    name: 'DAC Trading Coin (Limited Edition)',
    price: 31.14159,
    priceDisplay: '€31,14159',
  },
}

// Game download links (Google Drive share links)
export const GAME_DOWNLOADS = {
  windows: {
    platform: 'windows' as const,
    label: 'Download for Windows',
    // User will provide: https://drive.google.com/uc?export=download&id=YOUR_ID
    url: '#', // Placeholder - will be updated with actual Google Drive link
    size: '250 MB',
  },
  mac: {
    platform: 'mac' as const,
    label: 'Download for macOS',
    // User will provide: https://drive.google.com/uc?export=download&id=YOUR_ID
    url: '#', // Placeholder - will be updated with actual Google Drive link
    size: '280 MB',
  },
}

// Currency formatter
export const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)
}
