import React from 'react';
import Card from '../Card';

const CardList = ({ heroes }) => {
	if (!true) {
		throw new Error('There is an error please check');
	}
	return (
		<div>
			{heroes.map((user, i) => {
				console.log(user);
				return (
					<Card
						key={i}
						heroImage={heroes[i].img}
						id={heroes[i].id}
						roles={heroes[i].roles}
						localized_name={heroes[i].localized_name}
						primary_attr={heroes[i].primary_attr}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
