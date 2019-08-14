/**Ex 3.12********************* */
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0-v6fat.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

const phonebook = new Phonebook({
  name: 'Arto Vihavainen',
  number: '040-1234556'
})
const phonebook1 = new Phonebook({
  name: 'Arto Hellas',
  number: '12-3456789'
})

phonebook.save().then(response => {
  console.log('note saved!')
  console.log(response)
  mongoose.connection.close()
})

phonebook1.save().then(response => {
  console.log('note saved!')
  console.log(response)
  mongoose.connection.close()
})

Phonebook.find({}).then(result => {
  console.log('Phonebook:')
  result.forEach(note => {
    console.log(note.name, note.number)
  })
  mongoose.connection.close()
})
