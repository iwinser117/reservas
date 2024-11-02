import DataPicker from "./DataPicker";
import SelectCuidad from "./SelectCuidad";
import List from "./List";
import { Button } from "@nextui-org/react";

export default function ContainerFilter() {
  return (
    <div className="flex flex-col items-center justify-evenly m-auto h-auto bg-cover bg-center bg-no-repeat bg-[url('/assets/img_bg_filter.jpeg')] p-8 mt-4">
      <div className="container flex flex-col gap-4 m-auto p-4 md:p-6 max-w-5xl bg-black bg-opacity-60 rounded-lg">
        <div className="flex flex-col md:flex-row justify-around gap-4">
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">Encuentra tu lugar ideal</h1>
        </div>

        {/* Primera Fila: Ciudad y Lista de Personas */}
        <div className="flex flex-col md:flex-row justify-around gap-4">
          <div className="w-full md:w-1/3">
            <SelectCuidad />
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <List />
          </div>
        </div>

        {/* Segunda Fila: Fecha de Inicio y Fecha de Fin */}
        <div className="flex flex-col md:flex-row justify-around gap-4">
          <div className="w-full md:w-1/3">
            <DataPicker label="Fecha inicial" />
          </div>
          <div className="w-full md:w-1/3">
            <DataPicker label="Fecha final" />
          </div>
        </div>

        {/* Tercera Fila: Botón de Búsqueda */}
        <div className="flex justify-center mt-4">
          <Button color="primary" className="w-full md:w-auto">
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
}
