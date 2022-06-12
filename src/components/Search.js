import Container from './Container.styled.js';

export default function Search() {
  return (
    <Container role="search">
      <label htmlFor="search">Search for Random Joke</label>
      <input id="search" type="text" />
      <button type="submit">Search Joke</button>
    </Container>
  );
}
