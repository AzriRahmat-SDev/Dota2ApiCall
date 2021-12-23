import React from 'react';

const Card = ({ heroImage, id, roles, localized_name, primary_attr }) => {
	return (
		<form className="card">
			<div>
				<img src={heroImage} alt="" />
				<p>id: {id}</p>
				<p>role: {roles}</p>
				<p>localized_name: {localized_name}</p>
				<p>primary_attr: {primary_attr}</p>
				<br />
			</div>
		</form>
	);
};

export default Card;
