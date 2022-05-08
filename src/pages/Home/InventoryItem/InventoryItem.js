import React from "react";
import { useNavigate } from "react-router-dom";

const InventoryItem = (props) => {
  const { _id, name, image, price, description, supplier, quantity } =
    props.inventory;

  const navigate = useNavigate();

  const navigateInventoryUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className="bg-white shadow-md hover:shadow-xl  rounded-md overflow-hidden">
      <div className="w-full h-72">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-xl text-green-600 font-bold mb-2">
          {price} <sub>/MRP</sub>
        </p>
        <p className="text-base text-neutral-500 my-2">{description}</p>
        <div className="flex justify-between my-2">
          <p className="text-base font-semibold mr-1 ">
            Available :{" "}
            <span className="text-green-500 font-bold">{quantity}</span>
          </p>
          <p className="font-semibold text-base ">
            Supplier :{" "}
            <span className="text-green-500 font-bold">{supplier}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigateInventoryUpdate(_id)}
          className="bg-cyan-500 hover:bg-cyan-600 w-full py-2 font-bold"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default InventoryItem;
