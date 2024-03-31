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
    },
    {
      name: "Hostel El Viajero",
      type: "Hostel",
      price: 80000,
      location: "Cartagena",
      rating: 4.2,
      image: "https://example.com/hostel-el-viajero.jpg",
      images: [
        "https://example.com/hostel-el-viajero-1.jpg",
        "https://example.com/hostel-el-viajero-2.jpg",
      ],
      phone: "+57 5 678 9012",
      paymentMethods: ["Credit card", "Cash"],
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
    },
  ];
  return (
    <>
      <div className="container flex justify-around mx-auto mt-9">
        <section className="w-1/4">
          <Range />
          <ChecksTipo items={orderBy} name="Ordenar Por" />
          <ChecksTipo items={tipos} name="Tipos de Alojamiento" />
          <ChecksTipo items={services} name="Servicios" />
        </section>
        <section className="w-1/2">
          <ListItem items={hotels} />
        </section>
      </div>
    </>
  );
};
export default filtro;
