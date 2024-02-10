import React, { useState, useEffect } from "react";
import { z } from "zod";
import Input from "./Input";

const plateSchema = z
  .string()
  .regex(/^[A-Z]{2}\d{3}[A-Z]{2}$/, "Format tablice mora biti NS111NS");

const PlateInput = () => {
  const [plate, setPlate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    plateSchema.safeParse(plate).success
      ? setError("")
      : setError("Format tablice mora biti NS111NS");
  }, [plate]);

  return (
    <div>
      <Input
        label="Unesite Broj Vase Tablice"
        placeholder="Npr. NS111NS"
        value={plate}
        onChange={(value) => setPlate(value.toUpperCase())}
        error={!!error}
      />
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};

export default PlateInput;
