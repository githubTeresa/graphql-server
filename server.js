import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!')
});

const link = {}

const root = {
    hello: () => 'Hello world!',

    friend: () => {
        return {
            id: "thn",
            firstName: "Teresa H",
            lastName: "Nguyen",
            gender: "Female",
            email: "nguyenteresahang@gmail.com"
        }
    }
};

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log("Running on server port localhost:4000/graphql"));