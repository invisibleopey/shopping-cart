import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Catalogue() {
  return (
    <section className="cards">
      {data.customCatalogue.map((card, index) => {
        return <Card card={card} index={index} />;
      })}
    </section>
  );
}

export default Catalogue;
