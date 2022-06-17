import styled, { keyframes } from 'styled-components';

export default function Fact({ randomFact }) {
  return (
    <Section>
      {randomFact ? (
        <p>{randomFact.value}</p>
      ) : (
        <p>
          Explanation Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat, ratione?
        </p>
      )}
    </Section>
  );
}

const bounce = keyframes`
	0% {
		opacity: 0;
		transform: translateY(250px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}  `;

const Section = styled.section`
  padding: 25px;
  border: 5px dashed var(--primary-accent-color);
  height: 100%;
  font-size: 1.2rem;

  p {
    animation: ${bounce} 2s ease 0s 1 normal forwards;
  }
`;
