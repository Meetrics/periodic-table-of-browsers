import express from 'express'
import graphqlHTTP from 'express-graphql'
import Schema from './schema';
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));


module.exports = app.listen(4000, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Server is running on port 4000')
})
