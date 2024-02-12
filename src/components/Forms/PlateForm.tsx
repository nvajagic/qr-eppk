import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Button from "../Button/Button";
import Input from "../Input/Input";

const plateSchema = z.object({
  plate: z
    .string()
    .regex(/^[a-z]{2}\d{3}[a-z]{2}$/, "Format tablice mora biti NS111NS"),
});

const PlateForm = () => {
  return (
    <Formik
      initialValues={{ plate: "" }}
      validationSchema={toFormikValidationSchema(plateSchema)}
      onSubmit={(values, actions) => {
        console.log(values);
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
