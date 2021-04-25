import useShoppingItems from '../../hooks/useShoppingItems'
import { icons } from '../../assets'

function Suggestions() {
	const { createItem, getSuggestions } = useShoppingItems()

	const handleClick = sug => {
		createItem(sug.text, sug)
	}

	const suggestions = getSuggestions()
	return (
		<div style={{ width: '100%', paddingRight: '2rem' }}>
			<div className='add-item__suggestions'>
				<div className='add-item__suggestion-control add-item__suggestion-control--prev'>
					<img
						className='add-item__suggestion-control-icon'
						src={icons.leftArrowIcon}
						alt='Previous'
					/>
				</div>
				<div className='add-item__suggestion-chips'>
					{suggestions.map(sug => (
						<div
							className='add-item__suggestion-chip-item'
							key={sug.id}
							onClick={() => handleClick}>
							{sug.text}
						</div>
					))}
				</div>
				<div className='add-item__suggestion-control add-item__suggestion-control--next'>
					<img
						className='add-item__suggestion-control-icon'
						src={icons.rightArrowIcon}
						alt='Next'
					/>
				</div>
			</div>
		</div>
	);
}

export default Suggestions;
