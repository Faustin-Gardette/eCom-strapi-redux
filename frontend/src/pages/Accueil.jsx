import React from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
  return (
    <div>
      <Link to="/femme">
        <h1>Femme</h1>
      </Link>
      <Link to="/homme">
        <h1>Homme</h1>
      </Link>
    </div>
  );
};

export default Accueil;
