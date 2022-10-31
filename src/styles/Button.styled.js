import styled from 'styled-components';

export const Button = styled.button`
	padding: 1rem 2rem;
	background-color: ${(props) => (props.theme === 'main' ? '#fff' : '#000')};
	color: ${(props) => (props.theme === 'main' ? '#000' : '#fff')};
`;
