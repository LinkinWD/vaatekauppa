import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

//module styles
import styles from '../styles/Welcome.module.css';

//styled components
import { H1 } from '../styles/H1.styled';
import { Button } from '../styles/Button.styled';
//smoke video
import Smoke from '../public/video/smoke.mp4';



const Welcome = () => {

	const width = window.innerWidth

	const [timeLeft, setTimeLeft] = useState(width > 1100 ? 6 : 5)
	const navigate = useNavigate()

	
	
	useEffect(()=> {
		timeLeft > -1 ? setTimeout(()=> setTimeLeft(timeLeft -1), 1000) : navigate('/shop');
		
	},[timeLeft, navigate])

	return (
		<section className={styles.section}>
			<video className={styles.video} src={Smoke} autoPlay muted />
			<H1>
				<span className={styles.span}>D</span>
				<span className={styles.span}>e</span>
				<span className={styles.span}>m</span>
				<span className={styles.span}>o</span>
				<span className={styles.span}>k</span>
				<span className={styles.span}>a</span>
				<span className={styles.span}>u</span>
				<span className={styles.span}>p</span>
				<span className={styles.span}>p</span>
				<span className={styles.span}>a</span>
			</H1>
			<div className={styles.btn_container}>
			<Link to='/shop'>
				<Button theme='welcome'>Kauppaan {timeLeft}</Button>
			</Link>
			</div>
			
		</section>
	);
};
export default Welcome;
