import React, {useEffect, useState} from 'react'
import CardsData from '../api/Cards.json'

export default function Cards() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(CardsData)
  }, [])
  return (
    <div className='container mt-5'>
      <div className='row'>
      {cards.map(card => {
        return (
          <div className='col-lg-4 col-md-6 mb-3'>
            <div className='card border-light shadow'>
              <div className='card-body m-4 text-center align-items-center d-flex gap-3 flex-column'>
                <img src={card.image} className='card-img' height={150} />
                <span className='text-color-brand-primary-color weight-600'>
                  {card.title}
                </span>
                <span className='fs-15 text-muted'>{card.description}</span>
              </div>
            </div>
          </div>
          )
        })}
        

      </div>
    </div>
  )
}
