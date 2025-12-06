import { Slider } from "@nextui-org/react";
import React from "react";
import { useFilters } from "@/context/FilterContext";

const RangePrecio = () => {
  const { filters, updateFilter } = useFilters();

  const formatPrice = (price) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  };

  const handleChange = (newValue) => {
    updateFilter('priceRange', newValue);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="flex justify-between w-full mb-2">
        <p className="text-sm font-medium">Rango de Precio</p>
      </div>
      <Slider
        aria-label="Precio por Noche"
        step={1000}
        minValue={150000}
        maxValue={1500000}
        value={filters.priceRange}
        onChange={handleChange}
        className="w-full"
      />
      <p className="text-default-500 font-medium text-small w-full text-center">
        {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
      </p>
    </section>
  );
};

export default RangePrecio;
