import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Jeans() {
  const jeans = data.customCatalogue.filter((card) => {
    return card.category === 'jeans';
  });
  return (
    <section className="cards">
      {jeans.map((card, index) => {
        return <Card card={card} index={index} />;
      })}
    </section>
  );
}

export default Jeans;
