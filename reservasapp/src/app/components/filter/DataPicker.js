"use client";
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerValue() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <div className="p-2 container m-4 bg-slate-50 borderRadius justify-center justify-items-center">
      <LocalizationProvider dateAdapter={AdapterDayjs} className="bg-blue">
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label="Fecha Inicial"
            defaultValue={dayjs("2022-04-17")}
          />
          <DatePicker
            label="Fecha Final"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
