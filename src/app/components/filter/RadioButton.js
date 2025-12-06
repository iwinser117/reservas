import React, { useState } from "react";
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import { useFilters } from "@/context/FilterContext";

export default function RadioBtn(props) {
  const { filters, updateFilter } = useFilters();
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleChange = (value) => {
    updateFilter('sortBy', value);
  };

  const selectedIndex = props.items.indexOf(filters.sortBy);

  return (
    <div>
      <RadioGroup
        label={props.name}
        value={filters.sortBy}
        onValueChange={handleChange}
        size="sm"
      >
        {props.items.map(
          (item, index) =>
            (showAll ||
              index < 5 ||
              selectedIndex === index) && (
              <Radio size="sm" key={index} value={item}>
                {item}
              </Radio>
            )
        )}
      </RadioGroup>
      {props.items.length > 5 && (
        <div className="flex w-full justify-center">
          <Button size="sm" onClick={() => toggleShowAll()}>
            {showAll ? "Ver menos" : "Ver más"}
          </Button>
        </div>
      )}
    </div>
  );
}