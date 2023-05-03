import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Spinner = styled.div`
  background: tomato;
  width: 50px;
  height: 50px;
  animation: ${spinner} 1.2s linear infinite;
`;
