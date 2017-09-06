const {MongoClient} = require('mongodb');

const MONGO_URL = process.env.MLAB_URI;

module.exports = async () => {
    const db = await MongoClient.connect(MONGO_URL);
    return {Links: db.collection('links')};
}