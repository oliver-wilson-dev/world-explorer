import { gql } from "@apollo/client";

const getCountry = gql`
  query GetCountry($countryCode: String!) {
    countries(filter: { code: { regex: $countryCode } }) {
      code
      name
      emoji
      currency
      continent {
        name
      }
      capital
      states {
        name
      }
    }
  }
`;

export default getCountry;
