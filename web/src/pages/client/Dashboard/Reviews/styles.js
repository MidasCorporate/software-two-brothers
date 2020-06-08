import styled from 'styled-components';
import testimonial from '~/assets/testimonial_bg.jpg';
import portfolio from '~/assets/portfolio_bg.jpg';

export const Wrapper = styled.section`
  background: url(${testimonial}) no-repeat scroll 0 0;
  background-size: cover;
  position: relative;
  padding-bottom: 45px;

  ::before {
    background: #f6f6f6;
    opacity: 0.8;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  justify-content: center;
  h2 {
    margin-bottom: 30px;
    color: #333;
    font-size: 24px;
  }
`;

export const Content = styled.div`
  text-align: center;
  /* justify-content: center; */
  display: flex;
  /* position: relative; */
`;

export const Review = styled.div`
  width: 33.333%;
  height: 33.333%;
  padding: 5px;

  div {
    margin: 15px 0;

    p {
      color: #333;
      font-size: 16px;
    }
  }

  strong {
    display: block;
    /* margin: 3px 0; */
    color: #666;
    font-size: 13px;
  }

  p {
    font-size: 12px;
    color: #999;
  }
`;
