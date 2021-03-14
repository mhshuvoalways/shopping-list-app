import { createStore } from 'easy-peasy'
import BucketModel from './bucketModel'
import ItemModel from './itemModel'
import SuggestionModel from './suggesionModel'

const store = createStore({
    bucketModel: BucketModel,
    itemModel: ItemModel,
    suggestionModel: SuggestionModel
});

export default store