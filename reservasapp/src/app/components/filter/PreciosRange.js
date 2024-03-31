import { Slider } from "@nextui-org/react";

const RangePrecio = () => {
  return (
    <section>
      <Slider
        label="Precio por Noche"
        step={1000}
        minValue={150000}
        maxValue={1500000}
        defaultValue={[100000, 500000]}
        formatOptions={{
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0,
        }}
        classNames={{
          base: "max-w-md",
          filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
          labelWrapper: "mb-2",
          label: "font-medium text-default-700 text-medium",
          value: "font-medium text-default-500 text-small",
          thumb: [
            "transition-size",
            "bg-gradient-to-r from-secondary-400 to-primary-500",
            "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
            "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
          ],
          step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
        }}
        tooltipProps={{
          offset: 10,
          placement: "bottom",
          classNames: {
            base: [
              // arrow color
              "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
            ],
            content: [
              "py-2 shadow-xl",
              "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
            ],
          },
        }}
      />
    </section>
  );
};
export default RangePrecio;
