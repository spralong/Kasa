import React from "react";
import { Link } from "react-router-dom";
import logements from "../logements";
import Card from "../components/Card";

const Gallery = () => {
  return (
    <div className="cont_gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;
