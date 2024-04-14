import { Card, Divider } from "@nextui-org/react";
import ChecksTipo from "../components/filter/Checks";
import Range from "../components/filter/PreciosRange";
import ListItem from "../components/ListItem/ListItem";
const filtro = () => {
  const tipos = [
    "Hotel",
    "Casa/Apartamento completo",
    "Resort",
    "Bed & Breakfast",
    "Pensión",
    "Albergue",
    "Motel",
    "Apartahotel",
    "Hostal",
    "Camping",
    "Casa rural",
    "Posada",
  ];
  const services = [
    "Wifi",
    "Acceso a la playa",
    "Restaurant",
    "Estacionamiento",
    "Desayuno",
    "Piscina",
    "Gimnasio",
    "Aire Acondicionado",
    "Spa",
    "TV",
    "Cocina",
    "Bar",
    "Business center",
    "Cuidado de niños",
    "Solo adultos",
    "Actividades acuáticas",
    "Refrigerador",
    "Microondas",
    "Minibar",
    "Caja fuerte",
    "Sauna",
    "Casino",
    "Golf",
    "Servicio de transfer",
    "Room service",
    "Concierge",
    "Lavandería",
    "Accesible",
    "Secador de pelo",
  ];
  const orderBy = [
    "Precio de Menor a Mayor",
    "Precio de Mayor a Menor",
    "Distancia",
  ];
  const hotels = [
    {
      name: "Hotel Casa Blanca",
      type: "Hotel",
      price: 250000,
      location: "Bogotá",
      rating: 3,
      image: "https://example.com/hotel-casa-blanca.jpg",
      images: [
        "https://example.com/hotel-casa-blanca-1.jpg",
        "https://example.com/hotel-casa-blanca-2.jpg",
      ],
      phone: "+57 1 234 5678",
      paymentMethods: ["Credit card", "Debit card", "Cash"],
      details: {
        size: "50 sqm",
        amenities: "Free Wi-Fi, Room Service, Gym",
        additionalInfo:
          "Spacious rooms with city views, located in the heart of Bogotá's financial district.",
      },
    },
    {
      name: "Hostel El Viajero",
      type: "Hostel",
      price: 80000,
      location: "Cartagena",
      rating: 2,
      image: "https://example.com/hostel-el-viajero.jpg",
      images: [
        "https://example.com/hostel-el-viajero-1.jpg",
        "https://example.com/hostel-el-viajero-2.jpg",
      ],
      phone: "+57 5 678 9012",
      paymentMethods: ["Credit card", "Cash"],
      details: {
        size: "30 sqm",
        amenities: "Free Wi-Fi, Shared Kitchen, Common Area",
        additionalInfo:
          "Affordable hostel located in the historic center of Cartagena, perfect for backpackers.",
      },
    },
    {
      name: "Hotel Boutique B9",
      type: "Hotel",
      price: 350000,
      location: "Medellín",
      rating: 4.7,
      image: "https://example.com/hotel-boutique-b9.jpg",
      images: [
        "https://example.com/hotel-boutique-b9-1.jpg",
        "https://example.com/hotel-boutique-b9-2.jpg",
      ],
      phone: "+57 4 321 4567",
      paymentMethods: ["Credit card", "Debit card"],
      details: {
        size: "40 sqm",
        amenities: "Free Wi-Fi, Spa, Fitness Center",
        additionalInfo:
          "Boutique hotel with modern design, located in the trendy El Poblado neighborhood of Medellín.",
      },
    },
    {
      name: "Hotel Estelar Blue",
      type: "Hotel",
      price: 280000,
      location: "Barranquilla",
      rating: 4.3,
      image: "https://example.com/hotel-estelar-blue.jpg",
      images: [
        "https://example.com/hotel-estelar-blue-1.jpg",
        "https://example.com/hotel-estelar-blue-2.jpg",
      ],
      phone: "+57 5 890 1234",
      paymentMethods: ["Credit card", "Debit card", "Cash"],
      details: {
        size: "45 sqm",
        amenities: "Free Wi-Fi, Pool, Fitness Center",
        additionalInfo:
          "Upscale hotel with ocean views, located in the heart of Barranquilla's business district.",
      },
    },
    {
      name: "Hotel Regency Suites",
      type: "Hotel",
      price: 220000,
      location: "Cali",
      rating: 4.6,
      image: "https://example.com/hotel-regency-suites.jpg",
      images: [
        "https://example.com/hotel-regency-suites-1.jpg",
        "https://example.com/hotel-regency-suites-2.jpg",
      ],
      phone: "+57 2 765 4321",
      paymentMethods: ["Credit card", "Debit card"],
      details: {
        size: "60 sqm",
        amenities: "Free Wi-Fi, Room Service, Fitness Center",
        additionalInfo:
          "Luxury hotel with spacious suites, located in the upscale El Peñón neighborhood of Cali.",
      },
    },
    {
      name: "Hotel Dann Carlton",
      type: "Hotel",
      price: 300000,
      location: "Bogotá",
      rating: 4.4,
      image: "https://example.com/hotel-dann-carlton.jpg",
      images: [
        "https://example.com/hotel-dann-carlton-1.jpg",
        "https://example.com/hotel-dann-carlton-2.jpg",
      ],
      phone: "+57 1 345 6789",
      paymentMethods: ["Credit card", "Debit card", "Cash"],
      details: {
        size: "55 sqm",
        amenities: "Free Wi-Fi, Room Service, Fitness Center",
        additionalInfo:
          "Five-star hotel with elegant decor, located in Bogotá's financial district.",
      },
    },
  ];
  return (
    <>
      <div className="container sm:w-full  flex w-11/12 mx-auto my-8 ">
        <div className="w-auto sm:w-3/12 md:w-3/12 lg:w-3/12 xl:w-3/12 mx-auto">
          <div className="flex sm:justify-start md:justify-center">
            <Card
              className="p-4 my-4 md:p-2 md:my-2 flex h-auto sm:w-full md:w-5/5 lg:w-full xl:w-10/12 "
              style={{ minHeight: "auto" }}
            >
              <section className="flex flex-col relative">
                <Range />
                <Divider className="my-4" />
                <ChecksTipo items={orderBy} name="Ordenar Por" />
                <Divider className="my-4" />
                <ChecksTipo items={tipos} name="Tipos de Alojamiento" />
                <Divider className="my-4" />
                <ChecksTipo items={services} name="Servicios" />
              </section>
            </Card>
          </div>
        </div>

        <section className="w-8/12 md:w-9/12 lg:w-9/12 xl:w-8/12 xl:mx-auto ">
          <ListItem items={hotels} />
        </section>
      </div>
    </>
  );
};
export default filtro;
