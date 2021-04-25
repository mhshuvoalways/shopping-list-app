import { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

import useShoppingItems from '../../hooks/useShoppingItems'
import { icons } from '../../assets'


function SearchOverlay() {
	const { createItem } = useShoppingItems()

	const { searchTerm, searchItems } = useStoreState(state => state.suggestions);
	const focus = useStoreState(state => state.ui.searchOverlayFocus)

	const setFocus = useStoreActions(actions => actions.ui.setSearchOverlayFocus)
	const changeSearchTerm = useStoreActions(actions => actions.suggestions.changeSearchTerm)


	useEffect(() => {
		if (searchTerm && searchTerm.length > 0) {
			setFocus(true)
		} else {
			setFocus(false)
		}
	}, [searchTerm, setFocus, searchItems])

	const handleClick = sug => {
		if (createItem(sug.text, sug)) {
			changeSearchTerm('')
		}
	}
	return (
		<div className={focus ? 'add-item__filter-overlay' : 'add-item__filter-overlay hide'}>
			<ul className='add-item__filter-list'>
				{searchTerm.map(sug => (
					<li
						key={sug.id}
						className='add-item__filter-item'
						onClick={() => handleClick(sug)}
					>
						<div className='add-item__filter-content'>
							<img
								className='add-item__filter-icon'
								src={icons.plusIcon}
								alt='SearchIcon'
							/>
						{sug.text}
					</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchOverlay;
