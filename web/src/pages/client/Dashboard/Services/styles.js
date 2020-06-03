import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: #f6f6f6;
`;

export const Container = styled.div`
  /* display: flex; */
  /* align-items: center; */
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0;
  justify-content: center;
  h2 {
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  text-align: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(8, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  margin: 0 80px;

  @media (max-width: 1360px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin: 0 40px;
  }
`;

export const Service = styled.div`
  display: flex;
  width: 180px;
  height: 246px;
  flex-direction: column;
  padding: 20px;
  background: #f6d001;
  margin-bottom: 10px;
  border-radius: 4px;
  justify-content: space-around;
  align-items: center;

  img {
    width: 91px;
    border-radius: 4px;
  }

  strong {
    display: flex;
    font-size: 22px;
    color: #000;
  }

  p {
    color: #666;
  }
`;
