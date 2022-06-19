import styled, { keyframes } from 'styled-components';
import Span from './Span.styled.js';

export default function Fact({ randomFact }) {
  return (
    <Section>
      {randomFact ? (
        <p>{randomFact.value}</p>
      ) : (
        <p>
          <Span>Welcome!</Span> <br /> To get a random fact about Chuck Norris,
          click the button below. If you want to get a random fact about Chuck
          Norris with your name, enter it in the corresponding input field first
          and then click the button.
        </p>
      )}
    </Section>
  );
}

const bounce = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-80px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}  `;

const Section = styled.section`
  padding: 25px;
  border: 5px dashed var(--primary-accent-color);
  height: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;

  p {
    animation: ${bounce} 2s ease 0s 1 normal forwards;
    margin: 0;
  }
`;
