import { useState, useEffect, useCallback } from "react";
import { useLazyQuery } from "@apollo/client";
import getCountry from "../../../graphql/queries/getCountry";

let timeout;

const useGetCountry = () => {
  const [countryCode, setCountryCode] = useState();
  const [loading, setLoading] = useState();

  const [makeQuery, { loading: fetching, error, data: response }] =
    useLazyQuery(getCountry, {
      variables: {
        countryCode,
      },
    });

  useEffect(() => {
    if (countryCode) {
      makeQuery({
        variables: {
          countryCode,
        },
      });
    }
  }, [countryCode, makeQuery]);

  useEffect(() => {
    if (fetching) {
      clearTimeout(timeout);
      setLoading(true);
    } else {
      timeout = setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [fetching]);

  const countryData = response?.countries?.[0];

  const { capital, code, emoji, name, states, continent, currency } =
    countryData || {};

  const newCountrySelected = useCallback(
    (e) => setCountryCode(e.target.value),
    []
  );

  return {
    capital,
    code,
    emoji,
    name,
    states,
    continent,
    currency,
    loading,
    error,
    newCountrySelected,
  };
};

export default useGetCountry;
