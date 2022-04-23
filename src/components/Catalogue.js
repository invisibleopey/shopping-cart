import React from 'react';
import data from '../assets/Catalogue.json';
import Card from './Card';

function Catalogue() {
  return (
    <section className="cards">
      {data.customCatalogue.map((card, id) => {
        return <Card card={card} id={id} key={id} />;
      })}
    </section>
  );
}

export default Catalogue;
