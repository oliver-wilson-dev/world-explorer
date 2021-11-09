import React from "react";
import StatesList from "../StatesList";
import "./index.css";

const Country = ({
  capital,
  code,
  emoji,
  name,
  states,
  continent,
  currency,
}) => {
  return (
    <main className="country">
      <div className="name-container">
        <div className="name-city-container">
          <h2 className="country-name">
            {name} ({code})
          </h2>
          <div className="data-flag-container">
            <ul className="country-data">
              <li className="country-data-item">
                Capital City:{" "}
                <span className="country-data-item-bold">{capital}</span>
              </li>
              <li className="country-data-item">
                Continent:{" "}
                <span className="country-data-item-bold">{continent}</span>
              </li>
              <li className="country-data-item">
                Currencies Used:{" "}
                <span className="country-data-item-bold">{currency}</span>
              </li>
            </ul>
            <i role="img" className="flag" aria-label="flag emoji">
              {emoji}
            </i>
          </div>
        </div>
      </div>
      {states?.length > 0 && <StatesList states={states} />}
    </main>
  );
};

export default Country;
