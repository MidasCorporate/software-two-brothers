import styled from 'styled-components';
import backgroundImg from '~/assets/23.jpg';

export const Intro = styled.div`
  display: table;
  width: 100%;
  height: auto;
  padding: 100px 0;
  text-align: center;
  color: #fff;
  background-image: url(${backgroundImg});
  background-color: #000;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;

  @media (min-width: 768px) {
    height: 100%;
    padding: 0;
  }
`;

export const IntroBody = styled.div`
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 76px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    margin-top: 40px;
    font-family: 'Oswald', sans-serif;
    font-style: italic;
  }

  span {
    color: #f7eb06;
    text-shadow: 0 0px #f7eb06;
    font-family: 'Oswald', sans-serif;
    font-style: italic;
  }

  p {
    font-size: 18px;
    margin-bottom: 45px;
  }

  a {
    color: #333;
    font-weight: 800;
    background: #f7eb06;
    border-radius: 4px;
    border: 0;
    padding: 12px 24px;
    margin: 0 8px;
    font-size: 18px;
    transition: all 0.5s;

    :hover,
    :focus {
      color: #f7eb06;
      font-weight: 900;
      background-color: #333;
    }
  }
  @media (min-width: 768px) {
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 100px;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

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

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

export const Coll = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: 8.33333333%;

  img {
    height: 220px;
    width: 250px;
    margin-top: 130px;
  }

  @media (max-width: 640px) {
    > div {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
