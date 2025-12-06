"use client";
import { useState, useMemo } from 'react';
import { Card, Divider, Button } from "@nextui-org/react";
import ChecksTipo from "../components/filter/Checks";
import RadioButton from "../components/filter/RadioButton";
import Range from "../components/filter/PreciosRange";
import ListItem from "../components/ListItem/ListItem";
import { tipos, services, orderBy, hotels } from '../../data/data';
import { useFilters } from '@/context/FilterContext';
import { applyFilters, sortHotels } from '@/lib/filterUtils';

const Filtro = () => {
  const { filters } = useFilters();
  const [showFilters, setShowFilters] = useState(false);

  // Aplicar filtros y ordenamiento
  const filteredHotels = useMemo(() => {
    let result = applyFilters(hotels, filters);
    result = sortHotels(result, filters.sortBy);
    return result;
  }, [filters]);

  return (
    <div className="container flex flex-col md:flex-row sm:flex-row lg:flex-row w-11/12 mx-auto my-8 gap-4 justify-around">
      {/* Sección de filtro, siempre a la izquierda en pantallas grandes */}
      <div className="w-full md:w-3/12 sm:w-4/12 lg:w-3/12 mb-4 lg:mb-0">
        <Card className="p-4 my-4 md:p-2 md:my-2 flex h-auto w-full">
          <section className="flex flex-col relative">
            <Range />
            <Divider className="my-4" />
            <div className={`flex flex-col ${showFilters ? '' : 'hidden'} md:block`}>
              <RadioButton items={orderBy} name="Ordenar Por" />
              <Divider className="my-4" />
              <ChecksTipo items={tipos} name="Tipos de Alojamiento" />
              <Divider className="my-4" />
              <ChecksTipo items={services} name="Servicios" />
            </div>
            <Button
              className="md:hidden mt-6"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
            </Button>
          </section>
        </Card>
      </div>

      {/* Sección de lista de items */}
      <section className="w-full lg:w-8/12">
        {filteredHotels.length > 0 ? (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Se encontraron {filteredHotels.length} alojamiento{filteredHotels.length !== 1 ? 's' : ''}
            </div>
            <ListItem items={filteredHotels} />
          </>
        ) : (
          <Card className="p-8 text-center">
            <p className="text-gray-600">No se encontraron alojamientos que coincidan con tu búsqueda.</p>
            <p className="text-sm text-gray-400 mt-2">Intenta ajustar los filtros o la búsqueda.</p>
          </Card>
        )}
      </section>
    </div>
  );
};

export default Filtro;