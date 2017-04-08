var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors');

var schema = buildSchema(`
  type Query {
    todo (input: String) : String
  }
`);

dataList = []; //Saved Data

var root = {
  todo: ({ input }) => {
    dataList.push(input)
    console.log('Server data List: ',dataList)
    return input;
  }
};

var app = express();

app.use('/graphql',cors(), graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('Now browse to localhost:8080/graphql'));
