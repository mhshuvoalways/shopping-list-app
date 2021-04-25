import { createStore } from 'easy-peasy'
import BucketModel from './bucketModel'
import ItemModel from './itemModel'
import SuggestionModel from './suggesionModel'
import UIModel from './uiModel'

const store = createStore({
    bucketModel: BucketModel,
    itemModel: ItemModel,
    suggestionModel: SuggestionModel,
    ui: UIModel
});

export default store