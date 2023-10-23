import './Menu.css';
import close from '../../assets/icons/icons8-eliminare.svg';

const Menu = (props) => {
	const { isOpen, handleClick } = props;

	function handleCloseClick() {
		handleClick(false);
	}

	return (
		isOpen && (
			<>
				<div className='menu-overlay'></div>
				<section className='menu'>
					<div className='menu__top-section'>
						<span>Menu</span>
						<img
							onClick={handleCloseClick}
							className='menu__close-icon'
							src={close}
							alt=''
						/>
					</div>
				</section>
			</>
		)
	);
};

export default Menu;
