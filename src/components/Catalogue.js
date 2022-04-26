import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Catalogue() {
  return (
    <section className="cards">
      {data.customCatalogue.map((card) => {
        return <Card card={card} id={card.id} key={card.id} />;
      })}
    </section>
  );
}

export default Catalogue;
