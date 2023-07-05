'use client';
import styled from 'styled-components';


export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  height: 6rem; 
  background-color: #1f2937; 
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 90rem;
  margin: auto;
  padding: 0 5rem; 
  align-items: center;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  .rmdb-logo {
    visibility: visible;
  }
  .rmdb-logo-small {
    position: absolute;
    visibility: hidden;
    top: 100;
  }
`;


export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;



