import styled from 'styled-components';
import Button from './Button.js';
import Select from './SelectMenu.js';
import Label from './Label.styled.js';

export default function Form({ getRandomFact }) {
  return (
    <Container onSubmit={handleSubmit} aria-labelledby="title">
      <p>
        <Label htmlFor="name">Enter name to get customised facts</Label>
        <Input id="name" type="text" name="name" />
      </p>
      <Select />
      <Button />
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

const Input = styled.input`
  border: 3px solid var(--dark-color);
  border-radius: 5px;

  &:focus {
    outline: 3px solid var(--secondary-color);
  }
`;
