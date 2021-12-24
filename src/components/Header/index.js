import './Header.css';
import { Link } from 'react-router-dom';

export default function Logo() {
	return (
		<div className="header">
			<div className="logo">
				<Link to="/">Logo</Link>
			</div>
		</div>
	);
}
