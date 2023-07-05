'use client';
import styled from 'styled-components';


export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40rem;

  .hero-image {
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  max-width: 90rem; 
  margin: auto;
  z-index: 10;
  padding-left: 20px;
  padding-bottom: 12px;
  text-align: left;
  
`;

export const TextWrapper = styled.div`
  color: white;
  max-width: 42rem; /* equivalent to max-w-2xl */
  padding: 0 60px;

  h2 {
   
    font-size: 3.75rem;
    font-weight: bold;
    padding-bottom: 8px;
    
  }

  p {
      font-size: 1.25rem; 
  }

`;

