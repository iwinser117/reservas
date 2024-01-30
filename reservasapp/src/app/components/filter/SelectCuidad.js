import React from "react";
import { Select, SelectItem } from "../../../lib/mui";

export default function SelectCuidad() {
  const cities = [
    { id: 1, name: "Bogotá" },
    { id: 2, name: "Medellín" },
    { id: 3, name: "Cali" },
    { id: 4, name: "Barranquilla" },
    // Agrega más ciudades según sea necesario
  ];
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select label="Seleccione Ciudad" className="max-w-xs">
        {cities.map((city) => (
          <SelectItem key={city.id} value={city.name}>
            {city.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
