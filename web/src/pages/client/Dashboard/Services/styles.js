import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: #f6f6f6;
  /* margin: 0 auto; */
  /* align-items: center; */
`;

export const Container = styled.div`
  margin-left: 220px;
  /* margin: 0 auto; */
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Title = styled.div`
  padding: 30px 0;
  h2 {
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 180px;
  height: 246px;
  /* align-items: center; */
  /* justify-content: center; */

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
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

  /* @media (max-width: 1280px) {
    width: 300px;
    height: 438.42px;
  } */
`;
