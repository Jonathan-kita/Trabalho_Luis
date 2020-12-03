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

    li {
      padding: 20px;
      display: flex;
      background: #fff;
      border-radius: 4px;
      align-items: center;
      justify-content: space-between;
      border: 0;
      transition: all 0.2s;
      cursor: pointer;

      strong {
        color: #000;
        margin-bottom: 10px;
      }

      div {
        display: flex;
        flex-direction: column;
        > div {
          display: flex;
          flex-direction: row;

          time {
            color: #999;

            padding-right: 5px;
            border-right: 1px solid #999;
            font-size: 12px;
          }

          p {
            color: #999;
            margin-left: 5px;
            font-size: 12px;
          }
        }
      }
      nav {
        margin-top: -20px;
        display: flex;
        justify-content: space-between;

        button {
          border: 0;
          background: none;

          padding: 7px;
          border-radius: 4px;
          transition: all 0.2s;
          &:hover {
            background: #eee;
          }
        }
      }
    }
  }
`;
