import React from 'react'
import Heading from '../Heading/heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'

const Category = () => {

const renderCards = category.map(card=>
{
    return(
        //card
        <div className='flex-1 '>
            {/* Card Image */}

            <div>
                <img src={card.image} />
            </div>
            {/* Card Content */}
            <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Button content ="See ALL"/>
            </div>
        </div>
    )
}
)
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Shop" heading="by Category" />

                {/* Category Cards */}

                <div className='flex gap-10'>
                    {renderCards}
                </div>
            </div>
        </section>
    )
}

export default Category


const category = [
    {
        id: 1,
        title: 'Fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: FruitsCat
    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: DairyCat
    },
    {
        id: 3,
        title: 'Meat & SeaFood',
        description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more',
        image: SeaFoodCat
    }
]
