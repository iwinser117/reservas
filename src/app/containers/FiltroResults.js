import { useState } from 'react';
import { Card, Divider, Button } from "@nextui-org/react";
import ChecksTipo from "../components/filter/Checks";
import RadioButton from "../components/filter/RadioButton";
import Range from "../components/filter/PreciosRange";
import ListItem from "../components/ListItem/ListItem";
import { tipos, services, orderBy, hotels } from '../../data/data';

const Filtro = () => {
  const [showFilters, setShowFilters] = useState(false);

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
        <ListItem items={hotels} />
      </section>
    </div>
  );
};

export default Filtro;