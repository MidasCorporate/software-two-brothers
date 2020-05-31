import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  margin: auto;

  h1 {
    text-align: center;
  }
  @media (max-width: 700px) {
    transition: 1s;
    flex-direction: column;
    align-items: center;
  }
  span {
    margin-left: 12px;
    color: #999;
    margin-top: -10px;
  }
`;

export const ContainerCard = styled.div`
  transition: 1s;
  max-width: 90%;

  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  transition: 1s;
  border: 0;
  margin-bottom: 30px;

  /* padding: 10px; */
  /* border-radius: 4px; */
  background: #fff;
  width: 100%;
  box-shadow: 0 1px 4px 0 #eee;
  position: relative;
  display: flex;
  flex-direction: column;

  font-size: 0.875rem;
  @media (max-width: 600px) {
    transition: 1s;
    width: 80%;
  }
`;
export const CardImg = styled.div`
  height: 200px;
  perspective: 1000px;
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

export const CardFliper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`;
export const Image = styled.img`
  transition: 1s;
  width: 100%;
  height: 200px;
  @media (max-width: 600px) {
    transition: 1s;
    width: 83%;
  }
`;

export const CardHeader = styled.div`
  padding: 10px;
  font-weight: 800;
  margin-bottom: 15px;
`;

export const CardDescription = styled.div`
  padding: 10px;
  color: #999;
`;

export const CardContent = styled.div``;

export const Button = styled.button`
  border: none;
  background: none;
  padding: 10px;
  font-weight: 800;
  :hover {
    color: #999;
  }
`;

export const Coments = styled.div`
  flex-direction: row;
`;
