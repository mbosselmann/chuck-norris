import styled from 'styled-components';
import Form from './components/Form.js';
import Title from './components/Title.styled.js';
import Fact from './components/Fact.js';
import { useState } from 'react';

function App() {
  const [randomFact, setRandomFact] = useState(null);

  return (
    <Grid>
      <header>
        <Title id="title">
          Chuck Norris <br /> Random Facts:
          <br />
        </Title>
      </header>
      <main>
        {randomFact ? (
          <Fact randomFact={randomFact} />
        ) : (
          <section>
            Explanation Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Fugiat, ratione?
          </section>
        )}
        <Form getRandomFact={getRandomFact} />
      </main>
      <footer>Links to API</footer>
    </Grid>
  );

  async function getRandomFact(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setRandomFact(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;

const Grid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;

  header {
    display: grid;
    place-items: center;
  }

  main {
    place-self: center;
    overflow-y: scroll;
    padding: 0 20px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    max-width: 530px;
    height: 100%;
    align-items: center;
  }

  footer {
    background-color: var(--dark-color);
    color: var(--primary-color);
  }
`;
