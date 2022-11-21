import React, {  useState }  from 'react';
import cardboxStyle from './CardBox.module.css';
import cardStyle from './Card.module.css';
import {Card} from './Card'

export const Cardbox = () => {

  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {title:'Spring Flower',
    imgUrl: 'flower.jpg'},
    {title:'Dive Into The Nature',
    imgUrl: 'bg.jpg'},
    {title:'Colorful Lifesyle',
    imgUrl: 'https://images.unsplash.com/photo-1607852620445-259a0b00b92f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'},
    {title:'The most Creative Way',
    imgUrl: 'https://images.unsplash.com/photo-1641135821230-04f53e366336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'},
    {title:'Sooth Your Soul',
    imgUrl: 'https://images.unsplash.com/photo-1643661100639-de5cdf7bcb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'},
    {title:'Work In Peace',
    imgUrl: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'}
  ]
  return (
    <div className={cardboxStyle.container}>
      {
        cards.flat().map((card, i) => {
          return(
            <Card key={i} 
            // id={i} 
            classname={(i === activeCard ? `${cardStyle.panel} ${cardStyle.active}` : cardStyle.panel)} 
            title={card.title} 
            imgUrl={card.imgUrl} 
            clickHandler={()=>{setActiveCard(i)}}/>            
          )
        })
      }
    </div>
  );
}
