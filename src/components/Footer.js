import styled from 'styled-components';
import Span from './Span.styled.js';

export default function Footer() {
  return (
    <footer>
      <List role="list">
        <li>
          Chuck Norris Facts by
          <a
            href="https://api.chucknorris.io/#!"
            target="_blank"
            rel="noreferrer"
          >
            chucknorris.io
          </a>
        </li>
        <li>
          This website is a birthday present for <Span>Stefan Korder</Span>.
        </li>
      </List>
    </footer>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0 20px;
  font-size: 0.9rem;
  display: grid;
  gap: 10px;
  place-items: center;
`;
