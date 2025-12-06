import React, { useState } from "react";
import { CheckboxGroup, Checkbox, Button } from "@nextui-org/react";
import { useFilters } from "@/context/FilterContext";

export default function ChecksTipo(props) {
  const { filters, updateFilter } = useFilters();
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleChange = (values) => {
    if (props.name === "Tipos de Alojamiento") {
      updateFilter('types', values);
    } else if (props.name === "Servicios") {
      updateFilter('services', values);
    }
  };

  const getSelectedValues = () => {
    if (props.name === "Tipos de Alojamiento") {
      return filters.types;
    } else if (props.name === "Servicios") {
      return filters.services;
    }
    return [];
  };

  const selectedValues = getSelectedValues();

  return (
    <div>
      <CheckboxGroup
        label={props.name}
        value={selectedValues}
        onChange={handleChange}
        size="sm"
      >
        {props.items.map(
          (item, index) =>
            (showAll ||
              index < 5 ||
              selectedValues.includes(item)) && (
              <Checkbox size="sm" key={index} value={item}>
                {item}
              </Checkbox>
            )
        )}
      </CheckboxGroup>
      {props.items.length > 5 && (
        <div className="flex w-full justify-center">
          <Button size="sm" className="" onClick={() => toggleShowAll()}>
            {showAll ? "Ver menos" : "Ver más"}
          </Button>
        </div>
      )}
    </div>
  );
}
