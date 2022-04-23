import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Jeans() {
  const jeans = data.customCatalogue.filter((card) => {
    return card.category === 'jeans';
  });
  return (
    <section className="cards">
      {jeans.map((card, id) => {
        return <Card card={card} id={id} key={id} />;
      })}
    </section>
  );
}

export default Jeans;
