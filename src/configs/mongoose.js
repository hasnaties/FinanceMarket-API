import c from "config";
import mongoose from "mongoose";

//config
const dbHost = c.get('db.host');
const dbPort = c.get('db.port');
const dbName = c.get('db.name');

const dbUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`;

//connection
const connectDB = () => {

  mongoose.connect(dbUrl).then(() => {
    console.log('DB is connected.');
  }).catch((err) => {
    throw new Error('Unable to connect with the database.', err);
  })
}

export default connectDB;