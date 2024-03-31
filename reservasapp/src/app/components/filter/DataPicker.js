import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePickerValue = () => {
  const today1 = new Date();
  const today = new Date();
  let data2 = today.setDate(today.getDate() + 75);
  const [value, setValue] = useState({
    startDate: today1,
    endDate: today1,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  const disabledDateRange = {
    startDate: "1995-01-01",
    endDate: today1,
  };

  return (
    <div className="z-20">
      <Datepicker
        popoverDirection="down"
        useRange={true}
        separator={"Hasta"}
        value={value}
        onChange={handleValueChange}
        startFrom={today1}
        displayFormat={"DD/MM/YYYY"}
        toggleClassName="absolute  bg-blue-500 rounded-r-lg text-white right-0 h-10 px-3 min-h-full text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
        disabledDates={[
          {
            startDate: "1995-01-01",
            endDate: today1,
          },
          {
            startDate: data2,
            endDate: "2030-01-01",
          },
        ]}
      />
    </div>
  );
};

export default DatePickerValue;
