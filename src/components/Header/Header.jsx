import './Header.css';
import menulight from '../../assets/icons/icons8-menu.svg';
import menudark from '../../assets/icons/icons8-menudark.svg';
import { useContext } from 'react';
import Context from '../Context/context';

const Header = (props) => {
	const { handleClick } = props;
	const {theme} = useContext(Context);

	function handleClickMenu() {
		console.log('hamburger menu clicked');
		handleClick(true);
	}

	const setMenu = () => {
		return theme === 'light' ? menulight : menudark;
	}

	return (
		<header className={`header ${theme} `}>
			<div className='header__logo'>React with Big</div>
			<div className='header__menu' onClick={handleClickMenu}>
				<img src={setMenu()} alt='menu icon' />
			</div>
		</header>
	);
};

export default Header;
