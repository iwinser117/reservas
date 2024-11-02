import React, { useState } from "react";
import { RadioGroup, Radio, Button } from "@nextui-org/react";

export default function RedioBtn(props) {
  const [showAll, setShowAll] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <RadioGroup
        label={props.name}
        value={selectedValue}
        onValueChange={handleChange}
        size="sm"
      >
        {props.items.map(
          (item, index) =>
            (showAll ||
              index < 5 ||
              selectedValue === index.toString()) && (
              <Radio size="sm" key={index} value={index.toString()}>
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