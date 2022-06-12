import styled from 'styled-components';
import Form from './components/Form.js';
import Search from './components/Search.js';
import Title from './components/Title.styled.js';
import Joke from './components/Joke.js';
import { useState } from 'react';

function App() {
  const [randomJoke, setRandomJoke] = useState(null);

  return (
    <Grid>
      <Title>Chuck Norris Random Jokes</Title>
      <main>
        <section>
          Explanation Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat, ratione?
        </section>
        {randomJoke && <Joke randomJoke={randomJoke} />}
        <Form getRandomJoke={getRandomJoke} />
        <Search />
      </main>
      <footer>Links to API</footer>
    </Grid>
  );

  async function getRandomJoke(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRandomJoke(data);
      console.log(randomJoke);
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;

const Grid = styled.div`
  height: 100%;
  max-width: 530px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 100px 1fr 100px;

  main {
    overflow-y: scroll;
    padding: 20px;
  }

  footer {
    background-color: gold;
    color: white;
  }
`;
