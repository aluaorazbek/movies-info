'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem 5rem; 
  max-width: 90rem; 
  margin: auto;
  h2 {
    font-size: 1.25rem; 
    font-weight: bold;
    padding-bottom: 1rem;
  }
  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
  }
`;

