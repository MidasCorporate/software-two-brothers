import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0;
  background: #f6f6f6;
  margin: 0 auto;
`;

export const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  /* justify-content: center; */

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding: 30px 0;
  h2 {
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  /* @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  } */
  @media (max-width: 1200px) {
    /* grid-template-columns: repeat(2, 1fr); */
    width: 300px;

    /* div {
      width: 300px;

      img {
        width: 200px;
      }
    } */
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);

    div {
      width: 100%;

      img {
        width: 200px;
      }
    }
  }
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #333;
  margin-bottom: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 4px;
  }

  h3 {
    color: #f6f6f6;
  }

  p {
    color: #999;
  }
`;
