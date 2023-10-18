import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Article = (props) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{ ...props.style }} className="flex gap-32 items-center my-8">
      <div className="w-1/2 grid grid-cols-3 grid-rows-2 gap-6 ">
        <div>
          <img className="w-full h-full rounded-lg" src={props.img1} alt="" />
        </div>
        <div className="row-span-2 col-span-2">
          <img className=" w-full h-full rounded-lg" src={props.img2} alt="" />
        </div>
        <div>
          <img className="w-full h-full  rounded-lg" src={props.img3} alt="" />
        </div>
      </div>
      <div className="w-1/2 ">
        <h2 className="font-bebas text-8xl">{props.title}</h2>
        <div className="font-bebas text-7xl text-stroke-3 text-[#e3ded3] mt-2 ">
          {props.price} €
        </div>
        <div className="flex items-center gap-4 my-8">
          <div className="font-manrope text-xl font-semibold  ">Taille : </div>
          <span className="size text-lg font-semibold hover:bg-black hover:text-[#e3ded3]">
            S
          </span>
          <span className="size text-lg font-semibold hover:bg-black hover:text-[#e3ded3]">
            M
          </span>
          <span className="size text-lg font-semibold hover:bg-black hover:text-[#e3ded3]">
            L
          </span>
          <span className="size text-lg font-semibold hover:bg-black hover:text-[#e3ded3]">
            XL
          </span>
          <span className="size text-lg font-semibold hover:bg-black hover:text-[#e3ded3]">
            XXL
          </span>
        </div>
        <div>
          <div className="font-manrope text-xl font-semibold ">Quantité :</div>
          <div>
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
        </div>
        <p className="text-lg mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          dolorem soluta explicabo iure sed xlculpa neque non nostrum facilis
          nam odit corrupti nesciunt, suscipit corporis tenetur error dolor
          distinctio consequuntur! Sunt nostrum, totam non fugiat, dolore
          dolorem atque nihil maiores, enim accusamus iste porro? Quisquam
          excepturi adipisci illo maxime, consequatur, ut harum alias iste odit,
          delectus eaque placeat eos assumenda?
        </p>
        <button className="bg-black text-white text-lg px-6 py-2 flex items-center rounded-lg">
          {" "}
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "#FFFFFF", marginRight: "10px" }}
          />{" "}
          Ajout au Panier
        </button>
      </div>
    </div>
  );
};

export default Article;
