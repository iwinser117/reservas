import { DatePicker } from "@nextui-org/react";
import { useFilters } from "@/context/FilterContext";
import { useMemo } from "react";
import { parseDate, today } from "@internationalized/date";

export default function DataPicker({ label }) {
  const { filters, updateFilter } = useFilters();

  const todayDate = useMemo(() => today('America/Bogota'), []); // Ajusta tu zona horaria

  const handleDateChange = (date) => {
    if (!date) return;

    // date ya viene en el formato correcto de @internationalized/date
    const selectedDate = date;

    if (label === "Fecha inicial") {
      // No permitir fechas en el pasado
      if (selectedDate.compare(todayDate) < 0) {
        alert("No puedes seleccionar una fecha en el pasado");
        return;
      }
      updateFilter('startDate', date);
    } else if (label === "Fecha final") {
      // Asegurar que la fecha final sea después de la inicial
      if (filters.startDate) {
        if (selectedDate.compare(filters.startDate) < 0) {
          alert("La fecha final debe ser posterior a la fecha inicial");
          return;
        }
      }
      // No permitir fechas en el pasado
      if (selectedDate.compare(todayDate) < 0) {
        alert("No puedes seleccionar una fecha en el pasado");
        return;
      }
      updateFilter('endDate', date);
    }
  };

  const value = useMemo(() => {
    if (label === "Fecha inicial") {
      return filters.startDate || null;
    } else if (label === "Fecha final") {
      return filters.endDate || null;
    }
    return null;
  }, [label, filters.startDate, filters.endDate]);

  const minValue = useMemo(() => {
    if (label === "Fecha inicial") {
      return todayDate;
    }
    return filters.startDate || todayDate;
  }, [label, filters.startDate, todayDate]);

  return (
    <div className="">
      <DatePicker
        label={label}
        value={value}
        onChange={handleDateChange}
        fullWidth
        minValue={minValue}
      />
    </div>
  );
}