import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  background: #333;
  padding: 27px 0 32px;
  /* align-items: center;
  justify-content: center; */
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 470px) {
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: column;

    .title {
      color: #f7eb04;
      padding: 5px 10px;
      font-size: 32px;
    }

    strong {
      color: #f6f6f6;
      padding: 10px 10px;
      margin: 0;
      font-size: 24px;
      text-align: center;
    }

    @media (max-width: 665px) {
      .title {
        font-size: 24px;
      }

      strong {
        font-size: 16px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    padding: 20px;

    div {
      /* display: flex;
      flex-direction: row; */
    }
    input {
      width: 230px;
      height: 30px;
      padding-left: 5px;
      color: #333;
      font-weight: bold;
      border: none;
      margin: 5px 0;
      border-radius: 4px;
      background: #f6f6f6;
    }

    textarea {
      width: 230px;
      height: 70px;
      padding-left: 5px;
      color: #333;
      font-weight: bold;
      border: none;
      margin: 5px 0;
      border-radius: 4px;
      background: #f6f6f6;
    }

    button {
      /* align-items: center;
      justify-content: center; */
      height: 30px;
      background: #f7eb04;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      color: #333;
      opacity: 0.6;
      margin-top: 15px;
      cursor: pointer;
      transition: opacity 0.6s;

      :hover {
        opacity: 1;
      }
    }
  }
`;
