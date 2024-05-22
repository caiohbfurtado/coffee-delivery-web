import expressoTradicionalPNG from '../assets/photos/expresso-tradicional.png'
import expressoAmericanoPNG from '../assets/photos/expresso-americano.png'
import expressoCremosoPNG from '../assets/photos/expresso-cremoso.png'
import expressoGeladoPNG from '../assets/photos/expresso-gelado.png'
import cafeComLeitePNG from '../assets/photos/cafe-com-leite.png'
import lattePNG from '../assets/photos/latte.png'
import capuccinoPNG from '../assets/photos/capuccino.png'
import macchiatoPNG from '../assets/photos/macchiato.png'
import mocaccinoPNG from '../assets/photos/mocaccino.png'
import chocolateQuentePNG from '../assets/photos/chocolate-quente.png'
import cubanoPNG from '../assets/photos/cubano.png'
import havaianoPNG from '../assets/photos/havaiano.png'
import arabePNG from '../assets/photos/arabe.png'
import irlandesPNG from '../assets/photos/irlandes.png'
import { TypesOfCoffee } from '../components/CatalogCard'

export type Coffee = {
  id: number
  image: string
  types: TypesOfCoffee[]
  name: string
  description: string
  price: number
}

export const coffeesList: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    types: ['Tradicional'],
    image: expressoTradicionalPNG,
    price: 9.9,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    types: ['Tradicional'],
    image: expressoAmericanoPNG,
    price: 9.9,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    types: ['Tradicional'],
    image: expressoCremosoPNG,
    price: 9.9,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    types: ['Tradicional', 'Gelado'],
    image: expressoGeladoPNG,
    price: 9.9,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    types: ['Tradicional', 'Com Leite'],
    image: cafeComLeitePNG,
    price: 9.9,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    types: ['Tradicional', 'Com Leite'],
    image: lattePNG,
    price: 9.9,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    types: ['Tradicional', 'Com Leite'],
    image: capuccinoPNG,
    price: 9.9,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    types: ['Tradicional', 'Com Leite'],
    image: macchiatoPNG,
    price: 9.9,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    types: ['Tradicional', 'Com Leite'],
    image: mocaccinoPNG,
    price: 9.9,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    types: ['Especial', 'Com Leite'],
    image: chocolateQuentePNG,
    price: 9.9,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    types: ['Especial', 'Alcoólico', 'Gelado'],
    image: cubanoPNG,
    price: 9.9,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    types: ['Especial'],
    image: havaianoPNG,
    price: 9.9,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    types: ['Especial'],
    image: arabePNG,
    price: 9.9,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    types: ['Especial', 'Alcoólico'],
    image: irlandesPNG,
    price: 9.9,
  },
]
