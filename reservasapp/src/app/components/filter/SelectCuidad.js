import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function SelectCuidad() {
  const [city, setCity] = useState("");
  const [options, setOptions] = useState([
    { id: 1, name: "Bogotá" },
    { id: 2, name: "Medellín" },
    { id: 3, name: "Cali" },
    { id: 4, name: "Barranquilla" },
    // Agrega más ciudades según sea necesario
  ]);

  return (
    <Autocomplete
      value={city}
      onChange={(event, newValue) => {
        setCity(newValue);
      }}
      options={options}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <li {...props}>{option.name}</li>
      )}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Seleccione Ciudad"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <div sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
