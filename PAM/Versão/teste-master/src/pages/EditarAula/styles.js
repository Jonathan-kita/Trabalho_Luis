import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 80vh;
 

  form {
    display: flex;
    flex-direction: column;
    align-items:center;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      max-width: 350px;
      min-width: 200px;
      width: 100%;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
      width: 150%;
    }
    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      max-height: 380px;
      height: 15vh;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      max-width: 350px;
      min-width: 200px;
      width: 150%;
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
      width: 80%;
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
    div {
      min-width: 380px;
      width: 100%;
      display: flex;
      flex-direction: row;
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
     
    }
    h2 {
      color: rgba(255, 255, 255, 0.7);
      margin-left: 10px;
      font-weight: normal;
    }
    .checkbox {
      width: 20px;
      height: 20px;
    }
    .divcheckbox {
      display: flex;
      flex-direction: column;
      align-items:center;
      padding-left: 80px;
  
   }

  
    }


`;
