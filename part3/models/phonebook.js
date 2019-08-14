const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
mongoose.set('useFindAndModify', false) //remove deprecation warning while updating
const url = process.env.MONGODB_URI
console.log('connecting to', url)
if (!process.env.MONGODB_URI) {
  throw 'Missing db password'
}
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

const phonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  number: {
    type: String,
    minlength: 8,
    required: true,
    unique: true
  }
})
phonebookSchema.plugin(uniqueValidator)
phonebookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Phonebook', phonebookSchema)
