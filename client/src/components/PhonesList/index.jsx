import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getPhonesThunk,
  removePhoneThunk,
} from "../../store/slices/phonesSlice";

function PhonesList({
  phones,
  preorders,
  isFetching,
  error,
  getPhones,
  removePhone,
}) {
  useEffect(() => {
    getPhones();
  }, [getPhones]);

  return (
    <section>
      <ul>
        {phones.map((p) => (
          <li key={p.id}>
            <p>Photo: {p.image}</p>
            <p>Brand: {p.brand}</p>
            <p>Model: {p.model}</p>
            <p>Realize date: {p.realizeDate}</p>
            <p>Ram size: {p.ramSize} Gb</p>
            <p>Processor: {p.processor}</p>
            <p>Screen size: {p.screenSize} "</p>
            <p>Nfc: {p.isNfc ? "Yes" : "No"}</p>
            <button onClick={() => removePhone(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = (dispatch) => ({
  getPhones: () => dispatch(getPhonesThunk()),
  removePhone: (id) => dispatch(removePhoneThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
