import styled from "styled-components";

export const ErrorStyled = styled.div`
  position: absolute;
  top: 5px;
  left: 9px;
  width: 246px;
  height: 67px;
  background-color: #f00;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1.2em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 600px) {
    top: 5px;
    left: 59px;
  }
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 13px;
  cursor: pointer;
  outline: none;
`;
