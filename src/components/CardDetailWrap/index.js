import React from 'react';
import CardDetail from '../CardDetail';
import './CardDetailWrap.css';
import { Route, Routes } from 'react-router-dom';

const CardDetailWrap = ({ heroes }) => {
	return (
		<div className="detail-wrap">
			<Routes>
				<Route
					path={':heroId'}
					element={<CardDetail heroes={heroes} />}
				></Route>
			</Routes>
		</div>
	);
};

export default CardDetailWrap;
