import React from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from 'next/image';

const Promociones = () => {
  const list = [
    {
      title: "Cartagena",
      img: "/assets/prom_cartagena.jpeg",
      price: "Desde $5.50",
    },
    {
      title: "Pto. Asis",
      img: "/assets/prom_pto_asis.jpeg",
      price: "Desde $3.00",
    },
    {
      title: "Soacha",
      img: "/assets/prom_soacha.jpeg",
      price: "Desde $10.00",
    },
    {
      title: "Buenaventura",
      img: "/assets/prom_buenaventura.webp",
      price: "Desde $5.30",
    },
  ];

  return (
    <div className="w-5/6 mx-auto mt-8">
      <h2 className="text-center p-4 font-bold uppercase text-2xl leading-normal mt-0 mb-2 text-lightBlue-800">Promociones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {list.map((item, index) => (
          <Card 
            key={index}
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => console.log("item pressed")}
          >
            <CardBody className="p-0">
              <div className="relative w-full h-[140px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="rounded-t-lg object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAREXFyMeIx4dIysdHR0rHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </CardBody>
            <CardFooter className="justify-between py-3">
              <p className="font-bold text-sm">{item.title}</p>
              <p className="text-sm text-gray-600">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Promociones;