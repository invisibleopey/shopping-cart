import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Sneakers() {
  const sneakers = data.customCatalogue.filter((card) => {
    return card.category === 'sneakers';
  });
  return (
    <section className="cards">
      {sneakers.map((card) => {
        return <Card card={card} id={card.id} key={card.id} />;
      })}
    </section>
  );
}
export default Sneakers;
