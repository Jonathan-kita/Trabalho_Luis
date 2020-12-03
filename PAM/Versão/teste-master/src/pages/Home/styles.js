import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;

    a {
      padding: 20px;
      display: flex;
      background: #fff;
      border-radius: 4px;
      align-items: center;
      border: 0;
      transition: all 0.2s;
      cursor: pointer;

      strong {
        margin-left: 30px;
        color: rgba(0, 0, 0, 0.7);
      }

      &:hover {
        background: #eee;
        strong {
          color: #000;
        }
      }
    }
  }
`;
