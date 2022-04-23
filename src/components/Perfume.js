import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Perfume() {
  const perfume = data.customCatalogue.filter((card) => {
    return card.category === 'perfume';
  });
  return (
    <section className="cards">
      {perfume.map((card, id) => {
        return <Card card={card} id={id} key={id} />;
      })}
    </section>
  );
}

export default Perfume;
