import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { HeartIcon } from "../../icon/HeartIcon";

export default function ListItem(props) {
  const [liked, setLiked] = React.useState(false);
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
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
          shadow="sm"
          key={index}
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  height={200}
                  shadow="md"
                  src="https://images.pexels.com/photos/7613835/pexels-photo-7613835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  width="100%"
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-foreground/90">
                      {item.name}
                    </h3>
                    <p className="text-small text-foreground/80">{item.type}</p>
                    <p className="text-medium  mt-2">
                      {item.location} - {formatPrice(item.price)}
                    </p>
                  </div>
                  <Button
                    isIconOnly
                    className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                    radius="full"
                    variant="light"
                    onPress={() => setLiked((v) => !v)}
                  >
                    <HeartIcon
                      className={liked ? "[&>path]:stroke-transparent" : ""}
                      fill={liked ? "currentColor" : "none"}
                    />
                  </Button>
                </div>

                <div className="flex flex-col mt-3 gap-1">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((star, index) => {
                        return (
                          <svg
                            key={index}
                            className={`w-4 h-4 text-yellow-300 ms-1 ${
                              index < item.rating
                                ? ""
                                : "text-gray-300 dark:text-gray-500"
                            }`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        );
                      })}
                    </div>
                    <p className="text-small text-foreground/50">4:32</p>
                  </div>
                </div>

                <div className="flex w-full items-center justify-center">
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                  >
                    <HeartIcon className="text-foreground/80" />
                  </Button>
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                  >
                    <HeartIcon />
                  </Button>
                  <Button
                    isIconOnly
                    className="w-auto h-auto data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                  >
                    <HeartIcon size={54} />
                  </Button>
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                  >
                    <HeartIcon />
                  </Button>
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                  >
                    <HeartIcon className="text-foreground/80" />
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
