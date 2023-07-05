'use client';
import styled from 'styled-components';
// import Link from 'next/link';

export const Background = styled.div`
  background-color: #242424;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 70rem;
  margin: auto;
  padding: 1rem;
  color: white;
  font-size: 1.125rem;
`;

export const StyledLink = styled.a`
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transition-duration: 300ms;
  }
`;

export const Separator = styled.span`
  display: block;
  padding: 0 0.5rem;
`;

export const Title = styled.span`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

