import styled, { css } from 'styled-components';

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  border-radius: 4px;
  background: #fff;
  margin: 10px 0 10px;
  padding: 20px;
  transition: background 0.5s;
  border: none;

  span {
    > div {
      height: 3px;
      width: 0px;
      margin-left: -20px;
      margin-top: 42px;
      border-radius: 4px;
      background: red;
      position: absolute;
      transition: width 0.5s ease-out;
    }
  }
  :hover {
    span {
      > div {
        width: 900px;
      }
    }
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: initial;
  margin-top: -45px;
  margin-left: -10px;
  background: red;
  padding: 5px;
  border-radius: 4px;
`;

export const CardBody = styled.div`
  margin-top: 15px;
  text-align: initial;

  > strong {
    color: #333;
  }

  p {
    margin-top: 10px;
  }
`;

export const WindowMessage = styled.div`
  background-color: #fff;
  border: 2px solid red;
  color: #999;
  padding: 25px 5px 10px 10px;
  border-radius: 4px;
  margin-left: 45px;
  z-index: 1;
  display: ${(props) => (props.tag ? 'flex' : 'none')};
  align-items: center;
  text-align: center;
  flex-direction: column;
  position: absolute;
  width: 50%;
  max-height: 600px;
  animation: slide-mensagem 1s;

  @keyframes slide-mensagem {
    from {
      transform: translate3d(0px, -100px, 0px);
      opacity: 0;
    }

    to {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }
  }

  fieldset {
    width: 100%;
    overflow: auto;
    padding: 10px 0;

    table {
      width: 100%;
      /* display: flex;
    flex: 1; */

      tbody {
        display: flex;
        flex-direction: column;

        tr {
          padding: 5px 0;
          background: #f6f6f6;
          margin: 5px 0;
          border-radius: 4px;
          color: ${(props) => (props.unread ? '#999' : '#333')};
          font-weight: ${(props) => (props.unread ? '400' : 'bold')};
          cursor: pointer;

          td {
            max-width: 200px;
            margin-left: 15px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            & + td {
              padding-left: 15px;
            }
          }
        }
      }
    }
  }
`;

export const Close = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  svg {
    cursor: pointer;
    margin: none;
  }
`;
