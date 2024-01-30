import DataPicker from "./DataPicker";
import SelectCuidad from "./SelectCuidad";

export default function ContainerFilter() {
  return (
    <div className="flex justify-center md:container sm md:mx-auto">
      <div className="container">
        <div className="pb-4">
          <h1>Filtrar por:</h1>
        </div>
        <div className="flex justify-center items-center">
          <SelectCuidad />
        </div>
        <div className="container ">
        </div>
      </div>
      <DataPicker />
    </div>
  );
}
