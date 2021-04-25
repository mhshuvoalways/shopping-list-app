import PropTypes from 'prop-types';
import { navigate } from '@reach/router'
import { icons } from '../../assets'

function Nav({ brandLogo, name, moreMenu }) {
	return (
		<nav className='nav __shadow--lg'>
			<div className='container nav__container'>
				<div className='nav__brand'>
					<img
						className='nav__brand-logo'
						src={brandLogo}
						alt='Brand Logo'
						onClick={() => navigate('/')}
					/>
					<h1 className='nav__brand-name'>{name}</h1>
				</div>
				{moreMenu && (
					<div className='nav__menu nav__menu--right'>
						<div className='nav__menu-items'>
							<img
								className='nav__menu-icon'
								src={icons.moreMenuIcon}
								alt='More Menu'
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

Nav.defaultProps = {
	moreMenu: false,
}

Nav.propTypes = {
	brandLogo: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	moreMenu: PropTypes.bool.isRequired,
}

export default Nav;
