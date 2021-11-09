import React from "react";
import Country from "../Country";
import CountrySelector from "../CountrySelector";
import Footer from "../Footer";
import Logo from "../Logo";
import useGetCountry from "./hooks/useGetCountry";
import LoadingSpinner from "../LoadingSpinner";
import "./index.css";

const App = () => {
  const {
    capital,
    code,
    emoji,
    name,
    states,
    continent,
    currency,
    loading,
    newCountrySelected,
  } = useGetCountry();

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <CountrySelector onChange={newCountrySelected} />
      </header>
      {!loading && name && emoji && (
        <Country
          capital={capital}
          code={code}
          continent={continent?.name}
          emoji={emoji}
          name={name}
          states={states}
          currency={currency}
        />
      )}
      {loading && <LoadingSpinner />}
      <Footer />
    </div>
  );
};

export default App;
