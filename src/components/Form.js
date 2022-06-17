import styled from 'styled-components';

export default function Form({ getRandomFact }) {
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
    <Container onSubmit={handleSubmit} aria-labelledby="title">
      <p>
        <label htmlFor="name">Your name to get a customised fact</label>
        <input id="name" type="text" name="name" />
      </p>
      <p>
        <label htmlFor="categories">Select category to get a fact from</label>
        <select name="categories" id="categories">
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </p>
      <Box>
        <Button type="submit">Get Random Fact</Button>
      </Box>
    </Container>
  );

  function generateUrl(name, category) {
    if (!name) {
      return 'https://api.chucknorris.io/jokes/random?category=animal,career,dev,food,history,money,music,science,sport,travel';
    }
    if (name && category === 'no category selected') {
      return `https://api.chucknorris.io/jokes/random?name=${name}&category=animal,career,dev,food,history,money,music,science,sport,travel`;
    }
    if (name && category) {
      return `https://api.chucknorris.io/jokes/random?name=${name}&category=${category}`;
    }
    if (category === 'no category selected') {
      return 'https://api.chucknorris.io/jokes/random?category=animal,career,dev,food,history,money,music,science,sport,travel';
    }
    if (category) {
      return `https://api.chucknorris.io/jokes/random?category=${category}`;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name, categories } = form.elements;
    const url = generateUrl(name.value, categories.value);
    getRandomFact(url);
  }
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  gap: 20px;
  padding: 20px 0 35px;

  p {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0;
  }
`;

const Button = styled.button`
  background-color: var(--secondary-color);
  border: none;
  border-radius: 5px;
  font-family: 'Bangers', cursive;
  font-size: 1.5rem;
  width: 100%;
  position: absolute;
  top: -4px;

  &:active {
    top: 0;
  }
`;

const Box = styled.div`
  background-color: var(--dark-color);
  position: relative;
  height: 3rem;
  border-radius: 5px;
  margin-top: 5px;
`;
