import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

module.exports = async () => {
  process.env.MONGO_URI = await mongod.getUri();
};
