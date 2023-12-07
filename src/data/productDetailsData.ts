export interface Product {
    id: number;
    brand: string;
    model: string;
    frameMaterial: string;
    lensMaterial: string;
    color: string;
    changeColors: string[];
    price: number;
    rating: number;
    imageUrl: string;
}

export const PRODUCT_INFO: Product[] = [
    {
      id: 1,
      brand: 'FashionFrames',
      model: 'SleekVision',
      frameMaterial: 'Metal',
      lensMaterial: 'Polycarbonate',
      color: 'Black',
      changeColors:["white","yellow","red"],
      price: 49.99,
      rating: 4.5,
      imageUrl: '/products/p1.jpeg',
    },
    {
      id: 2,
      brand: 'TrendyOptics',
      model: 'ChicStyle',
      frameMaterial: 'Plastic',
      lensMaterial: 'CR-39',
      color: 'Tortoise Shell',
      changeColors:["white","blue","red"],
      price: 39.99,
      rating: 4.2,
      imageUrl: '/products/p2.jpg',
    },
    {
      id: 3,
      brand: 'SportyShades',
      model: 'ActivePro',
      frameMaterial: 'Rubberized Plastic',
      lensMaterial: 'Polarized Glass',
      color: 'Blue',
      changeColors:["white","yellow","red"],
      price: 59.99,
      rating: 4.7,
      imageUrl: '/products/p3.jpg',
    },
    {
        id: 4,
        brand: 'ClassicEyewear',
        model: 'Elegance',
        frameMaterial: 'Wood',
        lensMaterial: 'Acrylic',
        color: 'Brown',
        changeColors:["white","yellow","red"],
        price: 79.99,
        rating: 4.8,
        imageUrl: '/products/p4.jpg',
      },
      {
        id: 5,
        brand: 'RetroVision',
        model: 'VintageCharm',
        frameMaterial: 'Acetate',
        lensMaterial: 'Glass',
        color: 'Red',
        changeColors:["white","yellow","red"],
        price: 69.99,
        rating: 4.4,
        imageUrl: '/products/p5.jpg',
      },
      {
        id: 6,
        brand: 'ModernEdge',
        model: 'TechGlow',
        frameMaterial: 'Aluminum',
        lensMaterial: 'Photochromic',
        color: 'Silver',
        changeColors:["white","yellow","red"],
        price: 89.99,
        rating: 4.6,
        imageUrl: '/products/p6.jpg',
      }
  ];