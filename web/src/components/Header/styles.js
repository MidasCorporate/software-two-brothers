import styled, { css } from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: ${(props) => (props.headerColor ? 'transparent' : '#333')};
  position: fixed;
  width: 100%;
  padding: 0 30px;
  transition: background 1s;
  z-index: 2;
`;

export const Content = styled.header`
  height: 64px;
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
      height: 25px;
      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px solid rgba(255, 255, 255, 0.2);

      img {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      }
    }

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      ${(props) =>
        props.open &&
        css`
          display: flex;
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(255, 255, 255, 0.9);
          flex-direction: column;
          justify-content: center;
        `}

      li {
        text-transform: uppercase;
        font-weight: bold;

        & + li {
          margin-left: 30px;
        }
      }

      li a {
        color: #f7eb06;
        transition: color 0.5s;

        &:hover {
          color: #eee;
        }
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
          color: #f7eb06;
        }
      }
    }
  }

  @media (max-width: 1080px) {
    margin: 0 122px;
  }
  @media (max-width: 900px) {
    margin: 0 22px;
  }

  @media (max-width: 720px) {
    margin: 0;
    nav ul {
      display: none;
    }

    nav .menu {
      display: flex;
      position: relative;
      z-index: 1;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      background-color: transparent;
      cursor: pointer;
      color: rgb(255, 255, 255);
      /* display: none; */
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;

      .iconMenu {
        margin-top: 3px;
        transition-property: opacity, filter;
        transition-duration: 0.15s;
        transition-timing-function: linear;
        perspective: 80px;
        overflow: visible;
      }
      .iconMenu > span {
        width: 24px;
        height: 20px;
        display: inline-block;
        position: relative;
      }

      .iconMenu > span > span::before,
      .iconMenu > span > span::after {
        content: '';
        display: block;
        transition: transform 0s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
      }

      .iconMenu > span > span,
      .iconMenu > span > span::before,
      .iconMenu > span > span::after {
        width: 24px;
        height: 3px;
        background-color: #f7eb06;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
        border-radius: 20px;
      }

      .iconMenu > span > span {
        display: block;
        top: 50%;
        margin-top: -2px;
        transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
          background-color 0s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
      }

      .iconMenu > span > span::before {
        top: -7px;
      }
      .iconMenu > span > span::after {
        bottom: -7px;
      }

      > strong {
        color: #f7eb06;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 600;
        margin-left: 10px;
      }
    }
  }

  @media (min-width: 721px) {
    nav button {
      display: none;
    }
  }
`;
