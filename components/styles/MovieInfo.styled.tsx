'use client';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 4px;
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  min-height: 640px;
  display: flex;
  max-width: 80rem; 
  padding: 4px;
  margin: auto;
  z-index: 10;
  border-radius: 1.5rem; 
  background-color: #4b5563; 
  opacity: 0.9;

  .image-container {
    position: relative;
    width: 33%;
    height: auto;
  

    .rating {
      position: absolute;
      top: 4px;
      left: 4px;
      border-radius: 50%;
      background-color: white;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-size: 14px;
      font-weight: bold;
    }
  }

  .info-container {

    color: white;
    padding: 0;
    padding-bottom: 4px;
    padding: 0;
    padding-left: 8px;
    width: 66%;
    text-align: left;

    h2 {
      font-size: 36px;
      font-weight: bold;
      padding-bottom: 4px;
    }

    h3 {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      margin-bottom: 8px;
      font-size: 18px;
    }

    .pill-cover {
      margin-top: 8px;
    }
  }


`;

export const ImageContainer = styled.div`
  position: relative;
  /* width: 100%; */
  /* height: 96px;  */
  width: 33%;
  height: 40px;
  

/* @media (min-width: 768px) {
   {
    height: auto;
    width: 33.3333%;
  } */

  .rating {
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 50%;
    background-color: white;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 14px;
    font-weight: bold;
  }
`;



export const InfoContainer = styled.div`
  color: white;
  padding: 0;
  padding-bottom: 4px;
  padding: 0;
  padding-left: 8px;
  width: 66%;
  text-align: left;

  h2 {
    font-size: 36px;
    font-weight: bold;
    padding-bottom: 4px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-bottom: 8px;
    font-size: 18px;
  }

  .pill-cover {
    margin-top: 8px;
  }
  
`;







