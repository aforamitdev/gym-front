const { schemaComposer } = require("graphql-compose");

const { userMutations, userQuery } = require("./schemas/userSchemaGen");
const { playerMutations, playerQuery } = require("./schemas/playerSchemaGen");
const { clubMutations, clubQuery } = require("./schemas/clubSchemaGen");

// userQuery.add

schemaComposer.Query.addFields({
  ...userQuery,
  ...playerQuery,
  ...clubQuery,
  // name: "String",
});

schemaComposer.Mutation.addFields({
  ...userMutations,
  ...playerMutations,
  ...clubMutations,
  // name: "String",
});

exports.graphqlSchema = schemaComposer.buildSchema();
