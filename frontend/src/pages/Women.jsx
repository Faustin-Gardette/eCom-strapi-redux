import React from "react";
import Article from "../components/Article";

const Women = () => {
  return (
    <section>
      <Article
        img1="./assets/femme1.png"
        img2="./assets/femme3.png"
        img3="./assets/femme2.png"
        title="Super Veste"
        price="79,99"
      />
      <Article
        style={{ flexDirection: "row-reverse", marginTop: "75px" }}
        img1="./assets/femme4.jpg"
        img2="./assets/femme5.jpg"
        img3="./assets/femme6.jpg"
        title="Super Pull"
        price="39,99"
      />
    </section>
  );
};

export default Women;
