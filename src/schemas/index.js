import api from '../api.json'
import { normalize, schema } from 'normalizr'

const movie = new schema.Entity('movie', {}, {
    idAttribute: 'id',
    processStrategy: (value, parent, key) => ({...value, category:parent.id })
})

const category = new schema.Entity('categories', {
    playlist: new schema.Array(movie)
})

const categories = {categories: new schema.Array(category)}

const normalizedData = normalize(api, categories)

export default normalizedData