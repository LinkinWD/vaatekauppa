import styled from 'styled-components';

export const H1 = styled.h1`
	margin: 0;
	padding: 0;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	color: #fff;
	width: 100%;
	text-align: center;
	font-size: clamp(2.3rem, 8vw, 7rem);
	letter-spacing: 0.2em;

	& span {
		display: inline-block;
		animation: animate 1s linear forwards;
		opacity: 0;
	}
	@keyframes animate {
		0% {
			opacity: 0;
			transform: rotateY(90deg);
			filter: blur(10px);
		}
		100% {
			opacity: 1;
			transform: rotateY(0deg);
			filter: 0;
		}
	}

	& span:nth-child(1) {
		animation-delay: 0.1s;
	}
	& span:nth-child(2) {
		animation-delay: 0.2s;
	}
	& span:nth-child(3) {
		animation-delay: 0.3s;
	}
	& span:nth-child(4) {
		animation-delay: 0.4s;
	}
	& span:nth-child(5) {
		animation-delay: 0.5s;
	}
	& span:nth-child(6) {
		animation-delay: 0.6s;
	}
	& span:nth-child(7) {
		animation-delay: 0.7s;
	}
	& span:nth-child(8) {
		animation-delay: 0.8s;
	}
	& span:nth-child(9) {
		animation-delay: 0.9s;
	}
	& span:nth-child(10) {
		animation-delay: 1s;
	}
	& span:nth-child(11) {
		animation-delay: 1.1s;
	}

	@media only screen and (min-width: 700px) {
		& span:nth-child(1) {
			animation-delay: 0.3s;
		}
		& span:nth-child(2) {
			animation-delay: 0.5s;
		}
		& span:nth-child(3) {
			animation-delay: 0.7s;
		}
		& span:nth-child(4) {
			animation-delay: 0.9s;
		}
		& span:nth-child(5) {
			animation-delay: 1.1s;
		}
		& span:nth-child(6) {
			animation-delay: 1.3s;
		}
		& span:nth-child(7) {
			animation-delay: 1.5s;
		}
		& span:nth-child(8) {
			animation-delay: 1.7s;
		}
		& span:nth-child(9) {
			animation-delay: 1.9s;
		}
		& span:nth-child(10) {
			animation-delay: 2.1s;
		}
		& span:nth-child(11) {
			animation-delay: 1.1s;
		}
	}
	@media only screen and (min-width: 1100px) {
		& span:nth-child(1) {
			animation-delay: 0.3s;
		}
		& span:nth-child(2) {
			animation-delay: 0.6s;
		}
		& span:nth-child(3) {
			animation-delay: 0.9s;
		}
		& span:nth-child(4) {
			animation-delay: 1.2s;
		}
		& span:nth-child(5) {
			animation-delay: 1.5s;
		}
		& span:nth-child(6) {
			animation-delay: 1.8s;
		}
		& span:nth-child(7) {
			animation-delay: 2.1s;
		}
		& span:nth-child(8) {
			animation-delay: 2.4s;
		}
		& span:nth-child(9) {
			animation-delay: 2.7s;
		}
		& span:nth-child(10) {
			animation-delay: 3.0s;
		}
		& span:nth-child(11) {
			animation-delay: 3.3s;
		}
	}
`;
