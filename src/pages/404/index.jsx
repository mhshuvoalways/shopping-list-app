import { useStoreState, useStoreActions } from 'easy-peasy'
// Import Assets
import brandLogo from '../../assets/brand-logo/brand-logo.svg';
import moreMenu from '../../assets/icons/more-menu.png';

function NotFound() {
	const state = useStoreState(state => state.todos)
	const actions = useStoreActions(actions => actions)
	return (
		<div>
			{/* Navigation Bar */}
			<nav className='nav __shadow--lg'>
				<div className='container nav__container'>
					<div className='nav__brand'>
						<img
							className='nav__brand-logo'
							src={brandLogo}
							alt='Brand Logo'
						/>
						<h1 className='nav__brand-name'>Stack Learner</h1>
					</div>
					<div className='nav__menu nav__menu--right'>
						<div className='nav__menu-items'>
							<img
								className='nav__menu-icon'
								src={moreMenu}
								alt='More Menu'
							/>
						</div>
					</div>
				</div>
			</nav>
			{/* Main Content Body */}
			<main className='container __margin--ylg'>
				<h1>404 Page Not Found</h1>
				<div>
					<input
						onKeyPress={(e) => {
							if (e.key === 'Enter' && e.target.value) {
								actions.addTodo(e.target.value)
								e.target.value = ''
							}
						}} />
					<ul>
						{state.map(function (todo) {
							return <li key={todo}>{todo}</li>
						})}
					</ul>
				</div>
			</main>
		</div>
	);
}

export default NotFound;
