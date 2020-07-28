// Test
import testQueries from './test/queries';

const resolvers = {
  Query: {
    ...testQueries,
  },
};

export default resolvers;
