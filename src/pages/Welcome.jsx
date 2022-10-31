import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/Welcome.module.css';
import { Link } from 'react-router-dom';

import { H1 } from '../styles/H1.styled';

import Smoke from '../public/video/smoke.mp4';
import { Button } from '../styles/Button.styled';


const Welcome = () => {
	const [timeLeft, setTimeLeft] = useState(6)
	const navigate = useNavigate()

	useEffect(()=> {
		timeLeft > -1 ? setTimeout(()=> setTimeLeft(timeLeft -1), 1000) : navigate('/shop');
		

		
	},[timeLeft, navigate])

	return (
		<section className={styles.section}>
			<video className={styles.video} src={Smoke} autoPlay muted />
			<H1>
				<span className={styles.span}>v</span>
				<span className={styles.span}>a</span>
				<span className={styles.span}>a</span>
				<span className={styles.span}>t</span>
				<span className={styles.span}>e</span>
				<span className={styles.span}>k</span>
				<span className={styles.span}>a</span>
				<span className={styles.span}>u</span>
				<span className={styles.span}>p</span>
				<span className={styles.span}>p</span>
				<span className={styles.span}>a</span>
			</H1>
			<div>
			<Link to='/shop'>
				<Button theme='main'>Kauppaan {timeLeft}</Button>
			</Link>
			</div>
			
		</section>
	);
};
export default Welcome;
