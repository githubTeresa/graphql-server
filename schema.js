import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Hello {
        name: String
    }

    type Friend {
        id: ID,
        firstName: String
        lastName: String
        gender: String
        email: String
    }

    type Query {
        hello: String
        friend: Friend
    }

`)

export default schema;