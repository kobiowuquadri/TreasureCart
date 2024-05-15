import headphone from './Images/headphone.png'
import shoe from './Images/shoe.png'
import jacket from './Images/jacket.png'
import best1 from './Images/best1.png'
import best2 from './Images/best2.png'
import best3 from './Images/best3.png'

const Bestsellerdata = [
    {
        id: 1,
        image: [headphone],
        Name: 'Beats Studio3 wired headset',
        stock: '11 Available in Stock',
        price: '$299.95',
    },
    {
        id: 2,
        image: [shoe],
        Name: 'Air Jordan 1 Elevate',
        stock: '7 Available in Stock',
        price: '$199.99',
    },
    {
        id: 3,
        image: [jacket],
        Name: 'M&S Ladies Jaacket T49',
        stock: '7 Available in Stock',
        price: '$127.80',
    },
];

const responsive = [
    {
        image:[best1]
    },
    {
        image:[best2]
    },
    {
        image:[best3]
    }

]

export  {Bestsellerdata, responsive};