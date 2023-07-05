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
    /* padding: 0.5rem 1rem; */

    /* border-radius: 0 0 1rem 1rem; */
    background-color: #4b5563;
    /* display: flex; */
  /* align-items: center; */
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










// const MyComponent = ({ imgUrl, title, subtitle }) => (
//   <Wrapper>
//     <ContentWrapper>
//       <Thumb imgUrl={imgUrl} />
//       <div>
//         <h2>{title}</h2>
//         {subtitle ? <p >{subtitle}</p> : null}
//       </div>
//     </ContentWrapper>
//   </Wrapper>
// );

// export default MyComponent;

