import styled from 'styled-components';

export const About = styled.div`
  padding: 40px 0;
  background: #f6f6f6;
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

export const SectionTitle = styled.div`
  padding: 30px 0;
  h2 {
    margin-bottom: 30px;
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

  /* img {
    height: 220px;
    width: 250px;
  } */

  @media (max-width: 640px) {
    > div {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  @media (min-width: 992px) {
    float: left;
    width: 33.33333333%;
  }
`;

export const ImageAbout = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const IntroText = styled.div``;
