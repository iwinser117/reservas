import { Select, SelectItem } from "@nextui-org/react";
let ciudades = [
  { label: "Cartagena de Indias", value: "cartagena" },
  { label: "Bogotá", value: "bogota" },
  { label: "Medellín", value: "medellin" },
  { label: "Barranquilla", value: "barranquilla" },
  { label: "Cali", value: "cali" },
  { label: "Santa Marta", value: "santa-marta" },
  { label: "Bucaramanga", value: "bucaramanga" },
  { label: "Cúcuta", value: "cuenta" },
  { label: "Manizales", value: "manizales" },
  { label: "Pereira", value: "pereira" },
  { label: "Armenia", value: "armenia" },
  { label: "Villavicencio", value: "villavicencio" },
  { label: "Cartago", value: "cartago" },
  { label: "Ibagué", value: "ibague" },
  { label: "Tunja", value: "tunja" },
  { label: "Popayán", value: "popayan" },
  { label: "Montería", value: "monteria" },
  { label: "Sinú", value: "sinu" },
  { label: "San Andrés", value: "san-andres" },
  { label: "Providencia", value: "providencia" },
  { label: "Leticia", value: "leticia" },
  { label: "Mocoa", value: "mocoa" },
];
ciudades.sort((a, b) => a.label.localeCompare(b.label));
export default function App() {
  return (
    
      <Select label="Destino seleccionado" size="sm" className="md:mb-0 " placeholder="Seleccione un destino">
        {ciudades.map((item) => (
          <SelectItem key={item.value} value={item.value} className="max-w-xs">
            {item.label}
          </SelectItem>
        ))}
      </Select>
  );
}
