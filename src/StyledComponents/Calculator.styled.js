import styled from "styled-components";

export const StyledCalculator = styled.div`
  background: transparent;
  width: 20rem;
  height: 25rem;
  border: 2px solid red;
  position: relative;
  color: red;
  border-radius: 1rem;

  .outer {
    background: white;
    width: 20rem;
    height: 25rem;
    border-radius: 1rem;
    position: absolute;
    right: 4rem;
    bottom: 4rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0.5rem 0.5rem #5b86e5, -0.5rem -0.5rem #36d1dc;
  }
  .outer > p {
    color: gray;
    font-size: 1.3rem;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  .outer div {
    font-size: 1rem;
    width: 100%;
  }

  .outer .num-pages {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    gap: 0.4rem;
  }

  .outer .num-pages .add,
  .outer .num-pages .minus {
    font-size: 2rem;
    padding: 0 0.7rem;
    border: 0.1px solid #bdbdbd;
  }
`;
