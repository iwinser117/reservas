import React, { useState, useCallback } from "react";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox } from "@nextui-org/react";
import { Plus, Minus } from "lucide-react";
import { useFilters } from "@/context/FilterContext";

export default function GuestSelector() {
  const { filters, updateMultipleFilters } = useFilters();
  const [isOpen, setIsOpen] = useState(false);
  const [localCounts, setLocalCounts] = useState({
    adults: filters.adults,
    children: filters.children,
    rooms: filters.rooms
  });
  const [isPetFriendly, setIsPetFriendly] = useState(filters.petFriendly);

  const limits = {
    adults: { min: 1, max: 5 },
    children: { min: 0, max: 3 },
    rooms: { min: 1, max: 3 }
  };

  const handleCount = useCallback((type, operation) => {
    setLocalCounts(prev => {
      const current = prev[type];
      const { min, max } = limits[type];
      const newValue = operation === 'increment' 
        ? Math.min(current + 1, max)
        : Math.max(current - 1, min);
      
      return {
        ...prev,
        [type]: newValue
      };
    });
  }, []);

  const handleInputChange = useCallback((type, value) => {
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return;

    const { min, max } = limits[type];
    const validValue = Math.max(min, Math.min(max, numValue));

    setLocalCounts(prev => ({
      ...prev,
      [type]: validValue
    }));
  }, []);

  const handleReset = useCallback(() => {
    setLocalCounts({
      adults: 1,
      children: 0,
      rooms: 1
    });
    setIsPetFriendly(false);
  }, []);

  const handleAccept = () => {
    updateMultipleFilters({
      adults: localCounts.adults,
      children: localCounts.children,
      rooms: localCounts.rooms,
      petFriendly: isPetFriendly
    });
    setIsOpen(false);
  };

  const CounterInput = useCallback(({ label, type }) => {
    const value = localCounts[type];
    const { min, max } = limits[type];

    return (
      <div className="flex justify-between items-center w-full gap-4 py-2">
        <span className="text-sm font-medium">{label}</span>
        <div className="flex items-center gap-2">
          <Button
            isIconOnly
            size="sm"
            variant="bordered"
            className="min-w-8 w-8 h-8"
            onClick={() => handleCount(type, 'decrement')}
            isDisabled={value <= min}
          >
            <Minus size={16} />
          </Button>
          <Input
            type="number"
            value={String(value)}
            className="w-16 text-center"
            size="sm"
            min={min}
            max={max}
            onChange={(e) => handleInputChange(type, e.target.value)}
          />
          <Button
            isIconOnly
            size="sm"
            variant="bordered"
            className="min-w-8 w-8 h-8"
            onClick={() => handleCount(type, 'increment')}
            isDisabled={value >= max}
          >
            <Plus size={16} />
          </Button>
        </div>
      </div>
    );
  }, [localCounts, handleCount, handleInputChange]);

  return (
    <div className="relative">
      <Button
        variant="flat"
        size="lg"
        onPress={() => setIsOpen(true)}
        className="w-full flex justify-between items-center px-4 py-2 text-left rounded-md text-gray-700 bg-white"
      >
        {filters.adults} adulto{filters.adults > 1 && "s"}, 
        {filters.children} niño{filters.children > 1 && "s"}, 
        {filters.rooms} habitación{filters.rooms > 1 && "es"}
      </Button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        placement="auto"
        size="md"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Seleccionar huéspedes y habitaciones
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <CounterInput label="Adultos" type="adults" />
              <CounterInput label="Niños" type="children" />
              <CounterInput label="Habitaciones" type="rooms" />
              <div className="py-4 border-t">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Mascotas permitidas</p>
                    <p className="text-sm text-gray-500">Solo alojamientos que permitan mascotas</p>
                  </div>
                  <Checkbox
                    isSelected={isPetFriendly}
                    onValueChange={setIsPetFriendly}
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="flat"
              onPress={handleReset}
              isDisabled={localCounts.adults === 1 && localCounts.children === 0 && localCounts.rooms === 1 && !isPetFriendly}
            >
              Reiniciar
            </Button>
            <Button
              color="primary"
              onPress={handleAccept}
            >
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}