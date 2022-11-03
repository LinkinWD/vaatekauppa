import styled from 'styled-components';

export const Button = styled.button`
	padding: 1rem 3rem;
	background-color: ${(props) => (props.theme === 'welcome' ? '#D6CCA9' : '#fff')};
	color: ${(props) => (props.theme === 'welcome' ? '#990000' : '#000')};
	border-radius: 20px;
	font-size: 2rem;
	font-weight: 700;
`;
