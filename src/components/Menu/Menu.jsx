import './Menu.css';
import close from '../../assets/icons/icons8-eliminare.svg';
import MENU_DATA from '../../data/menu-data';

const Menu = (props) => {
	const { isOpen, handleClose, handleComponentToShow } = props;
	const menuData = MENU_DATA;

	function handleCloseClick() {
		handleClose(false);
	}

	function handleMenuItemClick(value) {
		handleComponentToShow(value);
		handleClose(false);
	}

	return (
		isOpen && (
			<>
				<div className='menu-overlay'></div>
				<section className='menu'>
					<div className='menu__top-section'>
						<span>
							Tema scuro <input type='checkbox'></input>{' '}
						</span>
						<img
							onClick={handleCloseClick}
							className='menu__close-icon'
							src={close}
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
