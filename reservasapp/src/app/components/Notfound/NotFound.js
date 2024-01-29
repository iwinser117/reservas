import Image from "next/image";

export default function NoFound() {
  return (
    <div>
      <p>pagina no encontrada</p>
      <Image
        src="https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=600&h=400"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
}
