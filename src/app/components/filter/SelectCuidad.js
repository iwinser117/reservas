import { Select, SelectItem, Button } from "@nextui-org/react";
import { useFilters } from "@/context/FilterContext";

let ciudades = [
  // Destinos de Playa
  { label: "Cartagena de Indias", value: "cartagena", region: "Costa" },
  { label: "Santa Marta", value: "santa-marta", region: "Costa" },
  { label: "San Andrés y Providencia", value: "san-andres", region: "Insular" },
  { label: "Tayrona", value: "tayrona", region: "Costa" },
  { label: "Barranquilla", value: "barranquilla", region: "Costa" },
  { label: "Buenaventura", value: "buenaventura", region: "Costa Pacífica" },
  
  // Destinos de Montaña
  { label: "Bogotá", value: "bogota", region: "Altiplano" },
  { label: "Medellín", value: "medellin", region: "Montaña" },
  { label: "Manizales", value: "manizales", region: "Eje Cafetero" },
  { label: "Armenia", value: "armenia", region: "Eje Cafetero" },
  { label: "Pereira", value: "pereira", region: "Eje Cafetero" },
  
  // Destinos Coloniales
  { label: "Tunja", value: "tunja", region: "Andino" },
  { label: "Villa de Leyva", value: "villa-de-leyva", region: "Andino" },
  { label: "Popayán", value: "popayan", region: "Andino" },
  { label: "Filandia", value: "filandia", region: "Eje Cafetero" },
  
  // Destinos Urbanos
  { label: "Cali", value: "cali", region: "Valle" },
  { label: "Bucaramanga", value: "bucaramanga", region: "Santander" },
  { label: "Cúcuta", value: "cucuta", region: "Norte" },
  
  // Destinos Especiales
  { label: "Villavicencio", value: "villavicencio", region: "Llanos" },
  { label: "Leticia", value: "leticia", region: "Amazonia" },
  { label: "Mocoa", value: "mocoa", region: "Amazonia" },
];

ciudades.sort((a, b) => a.label.localeCompare(b.label));

export default function SelectCuidad() {
  const { filters, updateFilter, resetFilters } = useFilters();

  const handleSelectionChange = (e) => {
    updateFilter('city', e.target.value);
  };

  const handleClear = () => {
    updateFilter('city', '');
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <Select 
        label="🌍 Destino seleccionado" 
        size="sm" 
        className="md:mb-0" 
        placeholder="Seleccione un destino"
        selectedKeys={filters.city ? [filters.city] : []}
        onChange={handleSelectionChange}
        description="Elige entre 20+ destinos turísticos"
      >
        {ciudades.map((item) => (
          <SelectItem 
            key={item.value} 
            value={item.value} 
            className="max-w-xs"
            description={item.region}
          >
            {item.label}
          </SelectItem>
        ))}
      </Select>
      {filters.city && (
        <Button 
          size="sm" 
          variant="flat" 
          color="danger"
          onClick={handleClear}
          className="w-full"
        >
          ✕ Limpiar Destino
        </Button>
      )}
    </div>
  );
}
