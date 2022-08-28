import { createServer } from '@graphql-yoga/node';
import { readFileSync } from 'node:fs';
import { Resolvers, Store, Sells } from './resolvers-types';

const schema = readFileSync('schema.graphql', 'utf-8');

const stores: Store[] = [
  {
    id: '0',
    location: 'Paris, France',
    name: 'Librairie',
    __typename: 'Store',
  },
  {
    id: '1',
    location: 'New York, New York, United States',
    name: 'Book store',
    __typename: 'Store',
  },
];

const resolvers: Resolvers = {
  Query: {
    stores: () => stores,
  },
};

// Create your server
const server = createServer({
  port: 3004,
  schema: {
    typeDefs: schema,
    resolvers,
  },
});

server.start();
