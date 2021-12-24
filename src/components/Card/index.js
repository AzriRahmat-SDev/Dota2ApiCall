import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
const Card = ({ heroImage, id, roles, localized_name, primary_attr }) => {
	const attrColors = {
		agi: 'green',
		str: 'red',
		int: 'blue',
	};

	return (
		<div className="card">
			<Link to={'/heroes/' + id}>
				<img src={heroImage} alt="" />
			</Link>
			<div>
				<p>id: {id}</p>
				<p>role: {roles.join(', ')}</p>
				<p>localized_name: {localized_name}</p>
				<p>
					primary_attr:{' '}
					<span
						style={{
							marginLeft: '4px',
							color: `${attrColors[primary_attr]}`,
						}}
					>
						{primary_attr}
					</span>
					<span
						className="attr-circle"
						style={{
							backgroundColor: `${attrColors[primary_attr]}`,
						}}
					></span>
				</p>
			</div>
		</div>
	);
};

export default Card;
