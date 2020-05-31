import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  background: ${(props) => (props.colorHeader ? '#44873d' : 'transparent')};
  position: fixed;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  /* margin: 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 222.5px;

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
