import styled from "styled-components";
import { darken } from "polished";

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  img {
    width: 150px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: all 0.2s;
      &:hover {
        background: ${darken(0.08, "#3b9eff")};
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }

    select {
      width: 100%;
      height: 44px;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
      option {
        color: #fff;
        background-color: #333;
      }
    }

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        width: 50%;
      }

      h3 {
        color: rgba(255, 255, 255, 0.7);
        margin-left: 10px;
        font-weight: normal;
      }
      div {
        display: flex;

        > input {
          width: 15px;
          height: 15px;
        }
      }
    }

    h3 {
      text-align: left;
      color: rgba(255, 255, 255, 0.7);
      font-weight: normal;
      margin: 0 0 10px;
    }
  }
`;
