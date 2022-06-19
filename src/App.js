import styled from 'styled-components';
import Form from './components/Form.js';
import Title from './components/Title.styled.js';
import Fact from './components/Fact.js';
import { useState } from 'react';
import Footer from './components/Footer.js';

function App() {
  const [randomFact, setRandomFact] = useState('');

  return (
    <Grid>
      <Header>
        <Title id="title">
          Chuck Norris <br /> Random Facts:
          <br />
        </Title>
      </Header>
      <Main>
        <Fact randomFact={randomFact} />
        <Form getRandomFact={getRandomFact} />
      </Main>
      <Footer />
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
  max-width: 530px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: grid;
  place-items: center;
`;

const Main = styled.main`
  place-self: center;
  overflow-y: scroll;
  padding: 0 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
  gap: 10px;
  align-items: center;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
