import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Shirts() {
  const shirts = data.customCatalogue.filter((card) => {
    return card.category === 'shirts';
  });
  return (
    <section className="cards">
      {shirts.map((card, index) => {
        return <Card card={card} index={index} />;
      })}
    </section>
  );
}

export default Shirts;
