import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Accessories() {
  const accessories = data.customCatalogue.filter((card) => {
    return card.category === 'accessories';
  });
  return (
    <section className="cards">
      {accessories.map((card) => {
        return <Card card={card} id={card.id} key={card.id} />;
      })}
    </section>
  );
}

export default Accessories;
