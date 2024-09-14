import { Collection, Db, MongoClient } from "mongodb";
import { envConfig } from "../utils/config";

const uri = `mongodb+srv://${envConfig.mongodbUsername}:${envConfig.mongodbPassword}@${envConfig.mongodbName}.g3jox.mongodb.net/?retryWrites=true&w=majority&appName=${envConfig.mongodbName}`

class DataBaseService {
    private client: MongoClient;
    private db: Db;

    constructor() {
        this.client = new MongoClient(uri);
        this.db = this.client.db(envConfig.mongodbName);
    }

    async connectDB() {
        try {
            await this.db.command({ping: 1});
            console.log('Pinged your deployment. You successfully connected to MongoDB!')
        } catch (error) {
            console.error("Error connecting to the database", error);
            throw error;
        }
    }
}

const database = new DataBaseService();

export default database;