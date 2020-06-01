import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  width: 100%;
  background: #f6f6f6;
  padding: 0 220px;
`;

export const Title = styled.div`
  margin-bottom: 30px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #333;
  margin-bottom: 10px;
  border-radius: 4px;
`;
