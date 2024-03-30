import { Select, SelectItem } from "@nextui-org/react";
const ciudades = [
  { label: "Cartagena de Indias", value: "cartagena" },
  { label: "Santa Marta y Tayrona", value: "santa_marta" },
  { label: "San Andrés y Providencia", value: "san_andres" },
  { label: "Bogotá y Sabana", value: "bogota" },
  { label: "Medellín y El Poblado", value: "medellin" },
  { label: "Cali y Valle del Cauca", value: "cali" },
  { label: "Barranquilla y Caribe", value: "barranquilla" },
  { label: "Manizales y Coffee Region", value: "manizales" },
  { label: "Pereira y Otún", value: "pereira" },
  { label: "Bucaramanga y Santander", value: "bucaramanga" },
  { label: "Villa de Leyva y Boyacá", value: "villa_de_leyva" },
  { label: "Carthagène des Indes", value: "carthagene" },
  { label: "Santa Marta et Tayrona", value: "santa_marta_tayrona" },
  {
    label: "San Andrés, Providencia y Santa Catalina",
    value: "san_andres_providencia",
  },
  { label: "Bogotá y Sabana", value: "bogota_sabana" },
  { label: "Medellín y El Poblado", value: "medellin_el_poblado" },
  { label: "Cali y Valle del Cauca", value: "cali_valle_del_cauca" },
  { label: "Barranquilla y Caraíbes", value: "barranquilla_caraibes" },
  { label: "Manizales y Región del Café", value: "manizales_region_du_cafe" },
  { label: "Pereira y Otún", value: "pereira_otun" },
  { label: "Bucaramanga y Santander", value: "bucaramanga_santander" },
  { label: "Villa de Leyva y Boyacá", value: "villa_de_leyva_boyaca" },
];

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap ">
      <Select
        label="seleccione una ciudad"
        size="sm"
        className="mb-6 md:mb-0"
        color="primary"
        isRequired="true"
      >
        {ciudades.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
            className="max-w-xs bg-slate-100"
          >
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
