import React, { useState } from "react";

function Lists() {
  const [products, setProduct] = useState([
    "product1",
    "product2",
    "product3",
    "product4",
  ]);

  const [dragItemIndex, setDragItemIndex] = useState();
  const [dragOverItemIndex, setDragOverItemIndex] = useState();

  const handleDragStart = (index) => {
    //console.log("current postiong" + index);
    setDragItemIndex(index);
    //console.log(dragItemIndex);
  };

  const handleDragOver = (event) => {
    // console.log(event);
    event.preventDefault();
  };

  const handleDrop = (index) => {
    // event.preventDefault();
    // console.log(`moving item ${dragItemIndex} to ${index}`);
    const _products = [...products];
    const dragItem = _products.splice(dragItemIndex, 1);
    _products.splice(dragOverItemIndex, 0, dragItem);
    setProduct(_products);
  };

  const handleDragEnter = (index) => {
    // event.preventDefault();
    setDragOverItemIndex(index);
  };

  const handleDragLeave = (event) => {
    setDragOverItemIndex(undefined);
  };
  const handleDragEnd = (event) => {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  };

  return (
    <div>
      <h1> Thank you god</h1>
      <div className="list">
        {products.map((product, index) => (
          <li
            key={index}
            className={
              dragOverItemIndex === index
                ? "list-item next-position"
                : "list-item"
            }
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}

            onDragEnter={() => handleDragEnter(index)}
            onDrop={() => handleDrop(index)}
            
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}
          >
            <span>{index}</span>
            <h3>{product}</h3>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Lists;
