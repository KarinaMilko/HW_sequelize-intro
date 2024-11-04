import { Formik, Form, Field } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  createPhonesThunk,
  getPhonesThunk,
} from "../../store/slices/phonesSlice";

const NFC = ["nfc", "without nfc"];
function PhoneForm({ getPhones, createPhone }) {
  const initialValues = {
    model: "",
    brand: "",
    realizeDate: "",
    ramSize: "",
    processor: "",
    screenSize: "",
    isNfc: "",
    image: false,
  };

  const handleSubmit = (values, formikBag) => {
    createPhone(values);
    formikBag.resetForm();
  };

  useEffect(() => {
    getPhones();
  }, []);

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
            Image:
            <Field name="image" type="checkbox" />
          </label>
          <br />
          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ phonesData: phones }) => ({ phones });

const mapDispatchToProps = (dispatch) => ({
  getPhones: () => dispatch(getPhonesThunk()),
  createPhone: (values) => dispatch(createPhonesThunk(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneForm);
