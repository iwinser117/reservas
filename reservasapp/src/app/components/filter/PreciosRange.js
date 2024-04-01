import { Slider } from "@nextui-org/react";
import React, { useState } from "react";

const RangePrecio = () => {
  const [value, setValue] = useState([100000, 500000]);

  const formatPrice = (price) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  };

  const incrementValue = () => {
    const newValue = [...value];
    if (newValue[1] < 1500000) {
      newValue[1] += 1000;
      setValue(newValue);
    }
  };

  const decrementValue = () => {
    const newValue = [...value];
    if (newValue[0] > 150000) {
      newValue[0] -= 1000;
      setValue(newValue);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex justify-between w-full mb-2">
        <button
          className="bg-white p-1 rounded-md shadow-md hover:bg-gray-100"
          onClick={() => {
            decrementValue();
          }}
        >
          -
        </button>
        <p>Ordenar por precios</p>
        <button
          className="bg-white p-1 rounded-md shadow-md hover:bg-gray-100"
          onClick={() => {
            incrementValue();
          }}
        >
          +
        </button>
      </div>
      <Slider
        aria-label="Precio por Noche"
        step={1000}
        minValue={150000}
        maxValue={1500000}
        defaultValue={value}
        onChange={setValue}
        className="w-full"
      />
      <p className="text-default-500 font-medium text-small w-full text-center">
        Rango de Precio: {formatPrice(value[0])} - {formatPrice(value[1])}
      </p>
    </section>
  );
};

export default RangePrecio;
