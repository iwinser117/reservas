import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { HeartIcon } from "../../icon/HeartIcon";

export default function ListItem(props) {
  const [likedItems, setLikedItems] = React.useState({});

  const toggleLiked = (index) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [index]: !prevLikedItems[index],
    }));
  };
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };
  return (
    <div>
      {props.items.map((item, index) => (
        <Card
          isBlurred
          className="border-none w-full my-4 bg-background/60 dark:bg-default-100/50 sm:max-w-[610px] md:max-w-[610px] lg:max-w-[810px] mx-auto hover:bg-sky-100 xl:max-w-[810px] 2xl:max-w-[910px] "
          shadow="sm"
          key={index}
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover cursor-pointer"
                  height={200}
                  shadow="md"
                  src="/assets/prom_pto_asis.jpeg"
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0 relative w-full">
                    <h3 className="font-semibold text-foreground/90">
                      {item.name}
                      <div className="absolute top-0 right-0">
                        <div className="flex items-center text-small text-foreground/50">
                          {Math.floor(item.rating)}
                          {[...Array(Math.floor(item.rating))].map(
                            (_, index) => (
                              <svg
                                key={index}
                                className="w-4 h-4 text-yellow-300 ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                            )
                          )}
                        </div>
                      </div>
                    </h3>
                    <p className="text-small text-foreground/80">{item.type}</p>
                    <p className="text-medium  mt-2">
                      {item.location}{" "}
                      <span className="text-small">
                        desde
                      </span>{" "}
                      {formatPrice(item.price)}{" "}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-3 gap-1">
                  <p className="text-small">{item?.details?.additionalInfo}</p>
                </div>

                <div className="flex w-full items-center justify-end">
                  <Button
                    className="text-default-900/60  mr-2.5"
                    radius="full"
                    variant="light"
                    onPress={() => toggleLiked(index)}
                    aria-label="HeartIcon"
                  >
                    <HeartIcon
                      className={
                        likedItems[index] ? "[&>path]:stroke-transparent" : ""
                      }
                      fill={likedItems[index] ? "red" : "none"}
                    />
                  </Button>
                  <Button className="" color="primary" variant="solid">
                    Ver disponibilidad
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
