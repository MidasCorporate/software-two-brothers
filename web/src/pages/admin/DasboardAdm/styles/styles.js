import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    max-width: 500px;
  }
`;

export const Grid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(8, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(12, 2fr));
  grid-gap: 20px;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  border-radius: 4px;
  background: #fff;
  margin: 10px 0 10px;
  padding: 20px;
  transition: background 0.5s;
  border: none;
  /* transition: border-bottom 0.5s ease-out; */

  span {
    > div {
      height: 3px;
      width: 0px;
      margin-left: -20px;
      margin-top: 42px;
      border-radius: 4px;
      background: red;
      position: absolute;
      transition: width 0.5s ease-out;
    }
  }
  :hover {
    span {
      > div {
        width: 900px;
      }
    }
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: initial;
  margin-top: -45px;
  margin-left: -10px;
  background: red;
  position: absolute;
  padding: 5px;
  border-radius: 4px;
`;

export const CardBody = styled.div`
  margin-top: 15px;
  text-align: initial;

  > strong {
    color: #333;
  }

  p {
    margin-top: 10px;
  }
`;

// export const CardOptionBaner = styled.div`
//   height: 70px;
//   width: 400px;
//   margin-left: -20px;
//   margin-top: 10px;
//   border-radius: 4px;
//   background: transparent;
//   position: absolute;
//   transition: border-bottom 0.5s ease-out;
//   :hover {
//     width: 900px;
//     border-bottom: 3px solid red;
//   }
// `;
