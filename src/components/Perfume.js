import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Perfume() {
  const perfume = data.customCatalogue.filter((card) => {
    return card.category === 'perfume';
  });
  return (
    <section className="cards">
      {perfume.map((card, index) => {
        return <Card card={card} index={index} />;
      })}
    </section>
  );
}

export default Perfume;
