import React from "react";
import { useQuery } from "@apollo/client";
import getCountryCodes from "../../graphql/queries/getCountryCodes";
import "./index.css";

const DEFAULT_VALUE = "";

const CountrySelector = ({ onChange }) => {
  const { loading, error, data: response } = useQuery(getCountryCodes);

  const countries = response?.countries;

  if (error || loading || !countries) return null;

  return (
    <select
      className="country-selector"
      defaultValue={DEFAULT_VALUE}
      onChange={onChange}
    >
      <option value={DEFAULT_VALUE} disabled hidden>
        Choose here
      </option>
      {countries.map(({ code, name, emoji }) => {
        return (
          <option key={code} value={code}>
            {name} ({code}) {emoji}
          </option>
        );
      })}
    </select>
  );
};

export default CountrySelector;
