import React, { useState } from "react";
import { CheckboxGroup, Checkbox, Button } from "@nextui-org/react";

export default function ChecksTipo(props) {
  const [showAll, setShowAll] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleChange = (values) => {
    setSelectedValues(values);
  };

  return (
    <div>
      <CheckboxGroup
        label={props.name}
        value={selectedValues}
        onChange={handleChange}
      >
        {props.items.map(
          (item, index) =>
            // Solo mostrar los primeros 5 elementos si no se ha seleccionado "Ver más"
            (showAll ||
              index < 5 ||
              selectedValues.includes(index.toString())) && (
              <Checkbox key={index} value={index.toString()}>
                {item}
              </Checkbox>
            )
        )}
      </CheckboxGroup>
      {props.items.length > 5 && (
        <Button onClick={() => toggleShowAll()}>
          {showAll ? "Ver menos" : "Ver más"}
        </Button>
      )}
    </div>
  );
}
