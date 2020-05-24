import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const TEST = gql`
  query test {
    testField
  }
`;

export default function Top() {
  const { loading, data } = useQuery(TEST, {});
  if (loading) return <p>Loading ...</p>;
  return <h1>{data.testField}</h1>;
}