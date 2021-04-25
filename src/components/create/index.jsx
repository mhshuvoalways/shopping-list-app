import SearchOverlay from './SearchOverlay';
import Suggestions from '../suggestion';
import { icons } from '../../assets'

function Create({ value, placeholder, onChange, onkeyPress, searchOverlay, showSuggestions }) {
	return (
		<section className='section add-item __shadow--sm'>
			<div className='add-item__relative'>
				<div className='add-item__input'>
					<img
						className='add-item__icon'
						src={icons.plusIcon}
						alt='create new bucket icon'
					/>
					<input
						className='add-item__input-field'
						type='text'
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						onkeyPress={onkeyPress}
					/>
				</div>
				{/* Filter Overlay */}
				{searchOverlay && <SearchOverlay />}
			</div>
			<div className='horizontal-line'></div>
			{/* Suggestion Chips */}
			{showSuggestions && <Suggestions />}
		</section>
	);
}

export default Create;

