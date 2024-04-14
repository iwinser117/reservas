import DataPicker from "./DataPicker";
import SelectCuidad from "./SelectCuidad";
import List from "./List";
import { Button } from "@nextui-org/react";
export default function ContainerFilter() {
  return (
    <div className="flex justify-evenly m-auto p-2 h-96 bg-cover bg-center bg-no-repeat	bg-[url('https://images.pexels.com/photos/2884864/pexels-photo-2884864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
      <div className="container h-64 w-full flex justify-evenly m-auto">
        <div className=" w-64  ">
          <SelectCuidad />
        </div>
        <div className=" w-80 	">
          <DataPicker />
        </div>
        <div className="flex justify-center w-34">
          <List />
        </div>
        <div className=" w-24">
          <Button className="" color="primary">
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
}
