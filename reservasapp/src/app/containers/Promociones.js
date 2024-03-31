import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Promociones = () => {
  const list = [
    {
      title: "Cartagena",
      img: "https://images.pexels.com/photos/12227830/pexels-photo-12227830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "Desde $5.50",
    },
    {
      title: "Pto. Asis",
      img: "https://images.pexels.com/photos/7613835/pexels-photo-7613835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "Desde $3.00",
    },
    {
      title: "Soacha",
      img: "https://images.pexels.com/photos/18102066/pexels-photo-18102066/free-photo-of-restaurante-paisaje-montanas-punto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "Desde $10.00",
    },
    {
      title: "Buenaventura",
      img: "https://images.pexels.com/photos/12470916/pexels-photo-12470916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "Desde $5.30",
    },
  ];
  return (
    <div className="container w-5/6 mx-auto">
      <h2 className="text-center p-4 font-semibold uppercase">Promociones</h2>
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px] z-0"
                src={item.img}
                isZoomed
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Promociones;
