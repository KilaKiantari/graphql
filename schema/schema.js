const typeDefs = `
  type Query {
    users: [User]
    phone: [Phone]
  }
  type Mutation {
    addUser(name: String!): User
    addPhone(input: PhoneReq): Phone
  }
  type User {
    id: Int!
    name: String!
  }
  input UserReq{
    name: String!
  }
  type Phone {
    id: Int!
    phoneNumber: String!
    user_id: Int!
  }
  input PhoneReq {
    phoneNumber : String!
    user_id : Int!
  }
  `;

module.exports = typeDefs;