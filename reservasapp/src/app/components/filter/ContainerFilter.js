import DataPicker from "./DataPicker";
import SelectCuidad from "./SelectCuidad";
import List from "./List";
import Button from "@mui/material/Button";
export default function ContainerFilter() {
  return (
    <div className="flex w-4/5 justify-around m-auto items-center my-6 bg-slate-500 p-2 rounded-lg">
      <div className=" w-1/6">
        <SelectCuidad />
      </div>
      <div className=" w-2/6">
        <DataPicker />
      </div>
      <div className="flex justify-center w-1/4">
        <List />
      </div>
      <div className=" w-1/6" >
        <Button className="" variant="contained" color="success">Buscar</Button>
      </div>
    </div>
  );
}
