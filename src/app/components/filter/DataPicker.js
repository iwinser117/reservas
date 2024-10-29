import { DatePicker } from "@nextui-org/react";
import { useState } from "react";

export default function DataPicker({ label }) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="">
      <DatePicker
        label={label}
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        fullWidth
      />
    </div>
  );
}
