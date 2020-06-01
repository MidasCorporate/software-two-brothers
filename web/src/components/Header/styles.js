import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  background: ${(props) => (props.headerColor ? 'transparent' : '#44873d')};
  position: fixed;
  width: 100%;
  padding: 0 30px;
  transition: background 1s;
  z-index: 2;
  @media (max-width: 768px) {
    width: 250px;
    height: 100%;
    position: fixed;
    transition: background 1s;
    padding: 0;
  }

  /* @media (min-width: 992px) {
    width: 270px;
  } */
  /* @media (min-width: 1200px) {
    width: 1170px;
  } */
`;

export const Content = styled.div`
  height: 64px;
  /* margin: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 222.5px;

  /* @media (min-width: 768px) {
    position: fixed;
    transition: background 1s;
    margin: 0;
  } */

  nav {
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;

      svg {
        color: #eee;
        margin-right: 5px;
        transition: color 0.5s;

        :hover {
          color: #333;
        }
      }

      div {
        margin-right: 20px;
        padding-right: 20px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        .two {
          color: #f8db0c;
          margin-right: 2px;
        }

        .brothers {
          color: #333;
        }
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        & + li {
          margin-left: 30px;
        }

        text-transform: uppercase;
        font-weight: bold;
      }

      a {
        /* text-decoration: none; */
        color: #fff;
        /* margin-right: ; */
      }
    }
  }

  aside {
    display: flex;
    align-items: center;

    a {
      margin: 0 15px;

      svg {
        color: #eee;
        transition: color 0.5s;

        :hover {
          color: #333;
        }
      }
    }
  }
`;
