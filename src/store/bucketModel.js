import { action } from 'easy-peasy'
import shortid from 'shortid'
// when we use redux we have to handle immutable way but in easy peasy we can handle mutable way
const BucketModel = { // data model
    items: {}, // we will change with array letter
    create: action((state, payload) => {
        const bucket = {
            id: shortid.generate(),
            name: payload,
            shoppingItems: [],
            costs: 0,
            create: new Date().toLocaleDateString()
        }
        state.items[bucket.id] = bucket;
    }),
    remove: action((state, payload) => {
        delete state.items[payload]
    }),
    addItem: action((state, payload) => {
        state.items[payload.bucketID].shoppingItems.push(payload.itemID)
    }),
    removeItem: action((state, payload) => {
        const bucket = state.items[payload.bucketID]
        const index = bucket.shoppingItems.findIndex(id => id === payload.itemID)
        bucket.shoppingItems.splice(index, 1)
    }),
    rename: action((state, payload) => {
        state.items[payload.bucketID].name = payload.name;
    }),
    updateCost: action((state, payload) => {
        state.items[payload.bucketID].costs = payload.costs;
    })
}

export default BucketModel