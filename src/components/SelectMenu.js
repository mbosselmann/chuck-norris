import styled from 'styled-components';
import Label from './Label.styled.js';

export default function Select() {
  const categories = [
    'no category selected',
    'animal',
    'career',
    'dev',
    'food',
    'history',
    'money',
    'music',
    'science',
    'sport',
    'travel',
  ];

  return (
    <Container>
      <Label htmlFor="categories">Select category to get fact from</Label>
      <Wrapper>
        <Menu name="categories" id="categories">
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </Menu>
      </Wrapper>
    </Container>
  );
}

const Container = styled.p`
  position: relative;
`;

const Menu = styled.select`
  appearance: none;
  border: 3px solid var(--dark-color);
  background-color: #fff;
  border-radius: 5px;
  width: 100%;

  &:focus {
    outline: 3px solid var(--secondary-color);
  }

  @media (prefers-color-scheme: dark) {
    border: none;
  }
`;

const Wrapper = styled.div`
  &::after {
    content: '';
    background-color: var(--dark-color);
    width: 0.8rem;
    height: 0.6rem;
    display: block;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    position: absolute;
    top: 40px;
    right: 10px;
  }
`;
