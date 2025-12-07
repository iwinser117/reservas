import React, { useState, useCallback } from "react";
import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox } from "@nextui-org/react";
import { Plus, Minus, Users, Home, Baby, PawPrint } from "lucide-react";
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

  const CounterInput = useCallback(({ label, type, icon: Icon }) => {
    const value = localCounts[type];
    const { min, max } = limits[type];

    return (
      <div className="flex justify-between items-center w-full gap-4 py-3 px-1">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <Icon size={20} />
          </div>
          <span className="text-sm font-semibold text-foreground">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            className="min-w-9 w-9 h-9 hover:bg-default-200"
            onClick={() => handleCount(type, 'decrement')}
            isDisabled={value <= min}
          >
            <Minus size={16} />
          </Button>
          <div className="min-w-[48px] h-10 flex items-center justify-center bg-default-100 dark:bg-default-50 rounded-lg border-2 border-default-200 dark:border-default-300">
            <span className="text-lg font-bold text-foreground">{value}</span>
          </div>
          <Button
            isIconOnly
            size="sm"
            variant="flat"
            className="min-w-9 w-9 h-9 hover:bg-default-200"
            onClick={() => handleCount(type, 'increment')}
            isDisabled={value >= max}
          >
            <Plus size={16} />
          </Button>
        </div>
      </div>
    );
  }, [localCounts, handleCount]);

  const getSummaryText = () => {
    const parts = [];
    if (filters.adults > 0) parts.push(`${filters.adults} adulto${filters.adults > 1 ? 's' : ''}`);
    if (filters.children > 0) parts.push(`${filters.children} niño${filters.children > 1 ? 's' : ''}`);
    if (filters.rooms > 0) parts.push(`${filters.rooms} habitación${filters.rooms > 1 ? 'es' : ''}`);
    return parts.join(' • ');
  };

  return (
    <div className="w-full">
      <Button
        variant="bordered"
        size="lg"
        onPress={() => setIsOpen(true)}
        className="w-full justify-between min-h-12 shadow-sm hover:shadow-md transition-shadow font-medium"
        startContent={<Users size={18} className="text-default-400" />}
      >
        <span className="truncate">{getSummaryText()}</span>
      </Button>

      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        placement="center"
        size="md"
        classNames={{
          base: "max-h-[90vh]",
          body: "py-6",
          backdrop: "bg-black/50 backdrop-blur-sm",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 pb-2 border-b border-divider">
            <h3 className="text-xl font-bold">Huéspedes y habitaciones</h3>
            <p className="text-sm font-normal text-default-500">Configura tu búsqueda</p>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-1">
              <CounterInput label="Adultos" type="adults" icon={Users} />
              <div className="border-b border-divider"></div>
              <CounterInput label="Niños" type="children" icon={Baby} />
              <div className="border-b border-divider"></div>
              <CounterInput label="Habitaciones" type="rooms" icon={Home} />
              
              <div className="pt-4 border-t border-divider">
                <div className="flex justify-between items-start gap-4 py-2 px-1">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="text-primary pt-0.5">
                      <PawPrint size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">Mascotas permitidas</p>
                      <p className="text-xs text-default-500 mt-1">
                        Solo alojamientos que permitan mascotas
                      </p>
                    </div>
                  </div>
                  <Checkbox
                    isSelected={isPetFriendly}
                    onValueChange={setIsPetFriendly}
                    classNames={{
                      wrapper: "after:bg-primary after:text-primary-foreground",
                    }}
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="border-t border-divider pt-4">
            <Button
              color="danger"
              variant="flat"
              onPress={handleReset}
              isDisabled={localCounts.adults === 1 && localCounts.children === 0 && localCounts.rooms === 1 && !isPetFriendly}
              className="font-semibold"
            >
              Reiniciar
            </Button>
            <Button
              color="primary"
              onPress={handleAccept}
              className="font-semibold"
            >
              Aceptar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}