import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  /* margin: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;

    img {
      width: 226px;
    }

    a {
      font-weight: bold;
      color: #333;
      margin-right: 20px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
