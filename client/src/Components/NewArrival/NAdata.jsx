import earpods from './NAimage/Bitmap (1).png'
import shoe from './NAimage/AIR JORDAN 1.png'
import headset from './NAimage/Bitmap (2).png'
import new1 from './NAimage/new1.png'
import new2 from './NAimage/new2.png'
import new3 from './NAimage/new3.png'

const NAdata = [
    {
        id: 1,
        image: [shoe],
        Name: 'Air Jordan Unisex A42',
        stock: '11 Available in Stock',
        price: '$299.95',
    },
    {
        id: 2,
        image: [earpods],
        Name: 'Beat X Twin EarPods',
        stock: '7 Available in Stock',
        price: '$199.99',
    },
    {
        id: 3,
        image: [headset],
        Name: 'Beats Wireless Headset',
        stock: '7 Available in Stock',
        price: '$127.80',
    },
];
const Responsive = [
    {
        image: [new1]
    },
    {
        image: [new2]
    },
    {
        image: [new3]
    }
]

export {NAdata, Responsive};