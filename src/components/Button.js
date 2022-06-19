import styled from 'styled-components';

export default function Button() {
  return (
    <Box>
      <button type="submit">Get Random Fact</button>
    </Box>
  );
}

const Box = styled.div`
  background-color: var(--dark-color);
  position: relative;
  height: 3rem;
  border-radius: 5px;
  margin-top: 5px;

  button {
    background-color: var(--secondary-color);
    border: none;
    border-radius: 5px;
    font-family: 'Bangers', cursive;
    font-size: 1.5rem;
    color: var(--text-color);
    width: 100%;
    position: absolute;
    top: -4px;
    letter-spacing: 1px;

    &:active {
      top: 0;
    }
  }
`;
