import Container from './Container.styled.js';

export default function Form({ getRandomJoke }) {
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
    <Container onSubmit={handleSubmit}>
      <h2>Get Random Joke</h2>
      <label htmlFor="name">Enter your name</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="categories">Get Random Joke by Category</label>
      <select name="categories" id="categories">
        {categories.map((category, index) => {
          return <option key={index}>{category}</option>;
        })}
      </select>
      <button type="submit">Get Random Joke</button>
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
    getRandomJoke(url);
  }
}
