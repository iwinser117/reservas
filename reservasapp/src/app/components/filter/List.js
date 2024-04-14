import React, { useState, useEffect, useRef } from "react";
import IconDown from "../../icon/down";
import { Button } from "@nextui-org/react";

export default function NestedList( ) {
  
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const ref = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setOpen(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleDecrement = (type) => {
    switch (type) {
      case "adults":
        setAdultsCount(Math.max(adultsCount - 1, 1));
        break;
      case "children":
        setChildrenCount(Math.max(childrenCount - 1, 0));
        break;
      case "rooms":
        setRoomsCount(Math.max(roomsCount - 1, 1));
        break;
      default:
        break;
    }
  };
  const handleIncrement = (type) => {
    console.log("hola");
    switch (type) {
      case "adults":
        setAdultsCount(Math.min(adultsCount + 1, 5));
        break;
      case "children":
        setChildrenCount(Math.min(childrenCount + 1, 3));
        break;
      case "rooms":
        setRoomsCount(Math.min(roomsCount + 1, 3));
        break;
      default:
        break;
    }
  };
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="relative" ref={ref}>
        <Button
          className="bg-blue-100 text-blue-600"
          color=""
          size="md"
          onClick={() => handleClick()}
        >
          {adultsCount} adulto{adultsCount > 1 && "s"}, {childrenCount} niño
          {childrenCount > 1 && "s"}, {roomsCount} habitación
          {roomsCount > 1 && "es"} {<IconDown />}
        </Button>

        {open && (
          <div className="absolute z-20  w-[18rem] mt-2 transition-transform duration-200">
            <div className=" bg-slate-300 shadow-popover rounded-md">
              <div className="">
                <div data-testid="">
                  <div className="grid grid-rows-3 place-content-center gap-4 mb-6 font-semibold">
                    <div className="flex justify-between items-center w-[15rem]">
                      <label className="">Adultos</label>
                      <div className="flex justify-between items-center w-1/2 mt-2">
                        <button
                          className="border-blue-700 border-1 flex items-center rounded-full"
                          type="button"
                          aria-label="Menos"
                          onClick={() => handleDecrement("adults")}
                          data-testid="adults-amount-minus-button"
                        >
                          <span
                            className="leading-none inline-flex items-center justify-center h-full w-full transform"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="pointer-events-none max-h-full max-w-full"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                d="M6 12h12"
                              ></path>
                            </svg>
                          </span>
                          <span className="sr-only">Menos</span>
                        </button>
                        <input
                          min="1"
                          max="48"
                          className="rounded-full w-1/2 text-right"
                          type="number"
                          id=":rf:"
                          data-testid="adults-amount"
                          value={adultsCount}
                          onChange={(e) =>
                            setAdultsCount(
                              Math.min(Math.max(Number(e.target.value), 1), 9)
                            )
                          }
                        />
                        <button
                          className="border-blue-700 border-1 flex items-center rounded-full"
                          type="button"
                          aria-label="Más"
                          data-testid="adults-amount-plus-button"
                          onClick={() => handleIncrement("adults")}
                        >
                          <span
                            className="leading-none inline-flex items-center justify-center h-full w-full transform"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="pointer-events-none max-h-full max-w-full"
                            >
                              <g fill="none" stroke="currentColor">
                                <path d="M6 12h12M12 6v12"></path>
                              </g>
                            </svg>
                          </span>
                          <span className="sr-only">Más</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-[15rem]">
                      <label className="">Niños</label>
                      <div className="flex justify-between items-center w-1/2">
                        <button
                          className="border-blue-700 border-1 flex items-center rounded-full"
                          type="button"
                          aria-label="Menos"
                          disabled=""
                          data-testid="children-amount-minus-button"
                          onClick={() => handleDecrement("children")}
                        >
                          <span
                            className="leading-none inline-flex items-center justify-center h-full w-full transform"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="pointer-events-none max-h-full max-w-full"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                d="M6 12h12"
                              ></path>
                            </svg>
                          </span>
                          <span className="sr-only">Menos</span>
                        </button>
                        <input
                          min="0"
                          max="42"
                          className="rounded-full w-1/2 text-right"
                          type="number"
                          id=":rg:"
                          data-testid="children-amount"
                          value={childrenCount}
                          onChange={(e) =>
                            setChildrenCount(
                              Math.min(Math.max(Number(e.target.value), 1), 9)
                            )
                          }
                        />
                        <button
                          className="border-blue-700 border-1 flex items-center rounded-full"
                          type="button"
                          aria-label="Más"
                          data-testid="children-amount-plus-button"
                          onClick={() => handleIncrement("children")}
                        >
                          <span
                            className="leading-none inline-flex items-center justify-center h-full w-full transform"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="pointer-events-none max-h-full max-w-full"
                            >
                              <g fill="none" stroke="currentColor">
                                <path d="M6 12h12M12 6v12"></path>
                              </g>
                            </svg>
                          </span>
                          <span className="sr-only">Más</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-[15rem]">
                      <label className="">Habitaciones</label>
                      <div className="flex justify-between items-center w-1/2">
                        <button
                          className="border-blue-700 border-1 flex items-center rounded-full"
                          type="button"
                          aria-label="Menos"
                          disabled=""
                          data-testid="rooms-amount-minus-button"
                          onClick={() => handleDecrement("rooms")}
                        >
                          <span
                            className="leading-none inline-flex items-center justify-center h-full w-full transform"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="pointer-events-none max-h-full max-w-full"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                d="M6 12h12"
                              ></path>
                            </svg>
                          </span>
                          <span className="sr-only">Menos</span>
                        </button>
                        <input
                          min="1"
                          max="6"
                          className="rounded-full w-1/2 text-right"
                          type="number"
                          id=":rh:"
                          data-testid="rooms-amount"
                          value={roomsCount}
                          onChange={(e) =>
                            setRoomsCount(
                              Math.min(Math.max(Number(e.target.value), 1), 9)
                            )
                          }
                        />
                        <button
                          className="border-blue-700 border-1 flex items-center rounded-full"
                          type="button"
                          aria-label="Más"
                          data-testid="rooms-amount-plus-button"
                          onClick={() => handleIncrement("rooms")}
                        >
                          <span
                            className="leading-none inline-flex items-center justify-center h-full w-full transform"
                            aria-hidden="true"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="pointer-events-none max-h-full max-w-full"
                            >
                              <g fill="none" stroke="currentColor">
                                <path d="M6 12h12M12 6v12"></path>
                              </g>
                            </svg>
                          </span>
                          <span className="sr-only">Más</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border-t flex justify-center border-grey-300 flex flex-row py-6">
                    <div className="text-m w-3/4">
                      <h2 className="font-bold">Mascotas permitidas</h2>
                      <h3>Solo alojamientos que permitan mascotas</h3>
                    </div>
                    <div className="flex items-center flex-row-reverse">
                      <input
                        className="Checkbox_checkbox--large__E7GhT appearance-none relative flex flex-shrink-0 items-center justify-center border border-grey-500 rounded-xs"
                        type="checkbox"
                        id="checkbox-6"
                        data-testid="pet-friendly-filter"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <footer className="flex justify-around ">
                <Button
                  data-testid="guest-selector-reset"
                  className="mb-3"
                  disabled=""
                  color="danger"
                >
                  Reiniciar
                </Button>
                <Button
                  className="text-white font-bold disabled:cursor-not-allowed rounded-full p-1 mb-3"
                  data-testid="guest-selector-apply"
                  onClick={() => handleShowModal()}
                  color="primary"
                >
                  Aceptar
                </Button>
              </footer>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            {/* Contenido de la modal */}
            <h1>Contenido de la Modal</h1>
            {/* Puedes colocar aquí el contenido de tu modal */}
            <button onClick={handleCloseModal}>Cerrar Modal</button>
          </div>
        </div>
      )}
    </>
  );
}
