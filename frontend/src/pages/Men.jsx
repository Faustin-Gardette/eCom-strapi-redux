import React from "react";
import Article from "../components/Article";

const Men = () => {
  return (
    <section>
      <Article
        img1="./assets/men1.jpg"
        img2="./assets/men2.jpg"
        img3="./assets/men3.jpg"
        title="Super Veste"
        price="79,99"
      />
      <Article
        style={{ flexDirection: "row-reverse", marginTop: "75px" }}
        img1="./assets/men4.jpg"
        img2="./assets/men5.jpg"
        img3="./assets/men6.jpg"
        title="Tee-Shirt"
        price="39,99"
      />
    </section>
  );
};

export default Men;
