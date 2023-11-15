import './Menu.css';
import closelight from '../../assets/icons/icons8-eliminare.svg';
import closedark from '../../assets/icons/icons8-eliminaredark.svg';
import MENU_DATA from '../../data/menu-data';
import Context from '../Context/context';
import { useContext } from 'react';

const Menu = (props) => {
	const { isOpen, handleClose, handleComponentToShow } = props;
	const menuData = MENU_DATA;
	const {theme, setTheme} = useContext(Context);

	function handleCloseClick() {
		handleClose(false);
	}

	function handleMenuItemClick(value) {
		handleComponentToShow(value);
		handleClose(false);
	}

	const changeTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const setIcon = () => {
		return theme === 'light' ? closelight : closedark;
	}

	return (
		isOpen && (
			<>
				<div className='menu-overlay' ></div>
				<section className={`menu--${theme} `}>
					<div className= {`menu__top-section--${theme} `}>
						<span>
							<input type='button' value="DARK THEME" onClick={changeTheme}></input>
						</span>
						<img
							onClick={handleCloseClick}
							className={`menu__close-icon ${theme} `}
							src={setIcon()}
							alt=''
						/>
					</div>
					<ul className='menu__items'>
						{menuData &&
							menuData.map(
								(item, index) =>
									item.enable && (
										<li
											className='menu__item'
											key={index}
											onClick={() =>
												handleMenuItemClick(
													item.componentToShow,
												)
											}
										>
											{item.label}
										</li>
									),
							)}
					</ul>
				</section>
			</>
		)
	);
};

export default Menu;
