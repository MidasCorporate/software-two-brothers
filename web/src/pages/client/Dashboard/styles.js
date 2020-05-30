import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 -15px !important;
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  border: 0;
  margin-bottom: 30px;
  margin-left: 10px;
  /* padding: 10px; */
  /* border-radius: 4px; */
  background: #fff;
  width: 100%;
  box-shadow: 0 1px 4px 0 #eee;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 300px;
  word-wrap: break-word;
  font-size: 0.875rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  :hover {
    transition: 1s;
    box-shadow: 0 0 3em #333;
    cursor: pointer;
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
