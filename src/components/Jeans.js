import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Jeans() {
  const jeans = data.customCatalogue.filter((card) => {
    return card.category === 'jeans';
  });
  return (
    <section className="cards">
      {jeans.map((card) => {
        return <Card card={card} id={card.id} key={card.id} />;
      })}
    </section>
  );
}

export default Jeans;
