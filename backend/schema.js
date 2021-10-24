const qraphql = require('graphql')

const { buildSchema } = qraphql

const schema = buildSchema(`
    type User {
        id:String
        userName: String
        fullName: String
        avatar: String
        mail: String
        telephoneNumber: String
    }

    input UserInput {
        id: String
        userName: String!
        fullName: String!
        avatar: String!
        mail: String!
        telephoneNumber: String!
    }

    type Query {
        getAllUsers: [User]
        getUser(id:String): User
    }
    
`)

module.exports = schema