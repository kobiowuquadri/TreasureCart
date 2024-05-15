import earpiece from './Image/earpiece.png'
import bag from './Image/bag.png'
import watch from './Image/watch.png'
import special1 from './Image/special1.png'
import special2 from './Image/Special2.png'
import special3 from './Image/special3.png'


const Specialdata = [
    {
        id: 1,
        image: [earpiece],
        Name: 'Beats Studio3 wired headset',
        stock: '11 Available in Stock',
        price: '$299.95',
    },
    {
        id: 2,
        image: [bag],
        Name: 'Air Jordan 1 Elevate',
        stock: '7 Available in Stock',
        price: '$199.99',
    },
    {
        id: 3,
        image: [watch],
        Name: 'M&S Ladies Jaacket T49',
        stock: '7 Available in Stock',
        price: '$127.80',
    },
];
const Responsive = [
    {
        image: [special1]
    },
    {
        image: [special2]
    },
    {
        image: [special3]
    }
]

export {Specialdata, Responsive};