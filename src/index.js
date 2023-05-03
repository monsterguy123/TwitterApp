import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import { connect } from './config/database.js';
import TweetService from './services/tweet-service.js'

dotenv.config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, async() => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');

    const repo = new TweetService();
    const Deepak = await repo.create({ content: '#firstTweet this is my first #vocation #excited #delighted' })
    console.log(Deepak)
    console.log("all done")
});