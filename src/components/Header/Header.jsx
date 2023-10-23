import './Header.css';
import menu from '../../assets/icons/icons8-menu.svg';

const Header = (props) => {
	const { handleClick } = props;

	function handleClickMenu() {
		console.log('hamburger menu clicked');
		handleClick(true);
	}

	return (
		<header className='header'>
			<div className='header__logo'>React with Big</div>
			<div className='header__menu' onClick={handleClickMenu}>
				<img src={menu} alt='menu icon' />
			</div>
		</header>
	);
};

export default Header;
