import styled from 'styled-components';

export default function Form({ getRandomFact }) {
  const categories = [
    'animal',
    'career',
    'dev',
    'fashion',
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
      <label htmlFor="name">Enter your name</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="categories">Get Random Fact by Category</label>
      <select name="categories" id="categories">
        {categories.map((category, index) => {
          return <option key={index}>{category}</option>;
        })}
      </select>
      <button type="submit">Get Random Fact</button>
    </Container>
  );

  function generateUrl(name, category) {
    if (name && category) {
      return `https://api.chucknorris.io/jokes/random?name=${name}&category=${category}`;
    }
    if (name) {
      return `https://api.chucknorris.io/jokes/random?name=${name}`;
    }
    if (category) {
      return `https://api.chucknorris.io/jokes/random?category=${category}`;
    } else {
      return 'https://api.chucknorris.io/jokes/random';
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name, categories } = form.elements;
    const url = generateUrl(name.value, categories.value);
    console.log(url);
    getRandomFact(url);
  }
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 45px;
`;
