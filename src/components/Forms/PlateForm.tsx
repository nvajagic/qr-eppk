import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Button from "../Button/Button";
import Input from "../Input/Input";
import type { Edpk, PSResponse } from "~/types/responses";

const plateSchema = z.object({
  plate: z
    .string()
    .regex(/^[a-z]{2}\d{3}[a-z]{2}$/, "Format tablice mora biti NS111NS"),
});

const PlateForm = ({ saveFines }: { saveFines: (data: Edpk[]) => void }) => {
  return (
    <Formik
      initialValues={{ plate: "" }}
      validationSchema={toFormikValidationSchema(plateSchema)}
      onSubmit={async (values, actions) => {
        const res = await fetch(
          `https://eppk.parkingns.rs/eppk/api/user/checkIfVoziloNaDepou?regBr=${values.plate.toUpperCase()}`,
        );
        if (!res.ok) {
          throw new Error(
            "Greska u dobavljanju informacija sa parking servisa",
          );
        }

        const data = (await res.json()) as PSResponse;
        saveFines(data.edpkList);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-row items-center gap-4">
          <div className="">
            <Input
              label="Unesite Broj Vase Tablice"
              name="plate"
              placeholder="NS111NS"
              upperCase
            />
            <div className="h-7">
              <ErrorMessage
                name="plate"
                component="div"
                className="h-7 pt-2 text-red-500"
              />
            </div>
          </div>
          <Button type="submit" text="Pretrazi" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default PlateForm;
