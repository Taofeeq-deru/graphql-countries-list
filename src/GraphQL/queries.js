import { gql } from "@apollo/client"

export const LOAD_COUNTRIES = gql`
  query ($ID: ID!) {
    continent(code: $ID) {
      code
      name
      countries {
        name
      }
    }
  }
`

export const LOAD_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`