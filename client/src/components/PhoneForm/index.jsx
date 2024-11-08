import { Formik, Form, Field } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  createPhonesThunk,
  getPhonesThunk,
} from "../../store/slices/phonesSlice";

function PhoneForm({ getPhones, createPhone }) {
  const initialValues = {
    model: "",
    brand: "",
    realizeDate: "",
    ramSize: "",
    processor: "",
    screenSize: "",
    isNfc: null,
    image: "",
  };

  const handleSubmit = (values, formikBag) => {
    const formData = new FormData();

    formData.append("model", values.model);
    formData.append("brand", values.brand);
    formData.append("realizeDate", values.realizeDate);
    formData.append("ramSize", values.ramSize);
    formData.append("processor", values.processor);
    formData.append("screenSize", values.screenSize);
    formData.append("isNfc", values.isNfc);
    formData.append("image", values.image);

    createPhone(formData);
    formikBag.resetForm();
  };

  useEffect(() => {
    getPhones();
  }, [getPhones]);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formikProps) => (
        <Form>
          <label>
            Model:
            <Field
              name="model"
              type="text"
              placeholder="Phone's model"
              autoFocus
            />
          </label>
          <br />
          <label>
            Brand:
            <Field name="brand" type="text" placeholder="Phone's brand" />
          </label>
          <br />
          <label>
            Realize Date:
            <Field name="realizeDate" type="date" />
          </label>
          <br />
          <label>
            Ram Size:
            <Field name="ramSize" type="number" placeholder="Ram Size" />
          </label>
          <br />
          <label>
            Processor:
            <Field name="processor" type="text" placeholder="Processor" />
          </label>
          <br />
          <label>
            Screen Size:
            <Field name="screenSize" type="number" placeholder="Screen Size" />
          </label>
          <br />
          <label>
            Nfc:
            <Field name="isNfc" type="checkbox" />
          </label>
          <br />
          <label>
            <input
              name="image"
              type="file"
              onChange={(e) => {
                formikProps.setFieldValue("image", e.target.files[0]);
              }}
            />
          </label>
          <br />
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getPhones: () => dispatch(getPhonesThunk()),
  createPhone: (values) => dispatch(createPhonesThunk(values)),
});

export default connect(null, mapDispatchToProps)(PhoneForm);
