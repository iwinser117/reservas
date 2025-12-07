"use client";
import DataPicker from "./DataPicker";
import SelectCuidad from "./SelectCuidad";
import List from "./List";
import { Button } from "@nextui-org/react";
import { useFilters } from "@/context/FilterContext";
import { Search } from "lucide-react";

export default function ContainerFilter() {
  const { filters } = useFilters();

  const handleSearch = () => {
    console.log("Búsqueda con filtros:", filters);
  };

  return (
    <div className="relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/assets/img_bg_filter.jpeg')] py-12 px-4 mt-4">
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
      
      <div className="relative z-10 w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white drop-shadow-2xl">
            Encuentra tu lugar ideal
          </h1>
          <p className="text-base md:text-lg text-gray-200/90 drop-shadow-lg">
            Explora más de 20 destinos turísticos en Colombia
          </p>
        </div>

        {/* Formulario de búsqueda */}
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200/20 dark:border-gray-700/20">
          <div className="space-y-6">
            {/* Primera Fila: Ciudad y Huéspedes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <SelectCuidad />
              </div>
              <div className="w-full">
                <List />
              </div>
            </div>

            {/* Segunda Fila: Fechas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <DataPicker label="Fecha inicial" />
              </div>
              <div className="w-full">
                <DataPicker label="Fecha final" />
              </div>
            </div>

            {/* Botón de Búsqueda */}
            <div className="flex justify-center pt-2">
              <Button 
                color="primary" 
                size="lg"
                className="w-full md:w-auto min-w-[240px] font-semibold text-base shadow-lg hover:shadow-xl transition-shadow"
                onClick={handleSearch}
                startContent={<Search size={20} />}
              >
                Buscar Alojamientos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}