import React from 'react';
import './Logo.css';
import Brain from './brain.png';
import Tilt from 'react-tilt'

const Logo = () => {
	return (
		<div className='center ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 'auto', width: 100}} >
				 <div className="Tilt-inner pa2"> <img alt='logo' src={Brain}/> </div>
			</Tilt>
		</div>
	);
}

export default Logo;