import { useEffect } from "react";
import { connect } from "react-redux";
import {
  changePhoneBrandFilter,
  getPhonesThunk,
  removePhoneThunk,
} from "../../store/slices/phonesSlice";

function PhonesList({
  phones,
  filter,
  preorders,
  isFetching,
  error,
  getPhones,
  removePhone,
  changePhoneBrand,
}) {
  useEffect(() => {
    getPhones(filter);
  }, [filter, getPhones]);

  const { brand } = filter;

  const uniqueBrands = [...new Set(phones.map((p) => p.brand))];
  return (
    <>
      <section>
        <h2>Brands</h2>
        {uniqueBrands.map((b) => (
          <label key={b}>
            <input
              checked={brand === b}
              type="radio"
              name="brand"
              value={b}
              onChange={() => changePhoneBrand(b)}
            />
            {b}
          </label>
        ))}
        <button onClick={() => changePhoneBrand(null)}>Reset</button>
      </section>
      <section>
        <ul>
          {phones
            .filter((p) => (brand ? p.brand === brand : true))
            .map((p) => (
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
    </>
  );
}

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = (dispatch) => ({
  getPhones: (data) => dispatch(getPhonesThunk(data)),
  removePhone: (id) => dispatch(removePhoneThunk(id)),
  changePhoneBrand: (data) => dispatch(changePhoneBrandFilter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
