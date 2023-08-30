'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 20rem; 
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: 100%;

  div {
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #4b5563;
  }

  h2 {
    color: #93c5fd; 
    font-size: 0.875rem; 
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: #60a5fa;
    font-size: 0.75rem; 
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
  }
`;
