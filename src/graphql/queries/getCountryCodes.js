import { gql } from "@apollo/client";

const getCountryCodes = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

export default getCountryCodes;
