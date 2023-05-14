import hashtagRepository from '../repository/hashtag_repository.js';
import TweetRepository from '../repository/tweet-repository.js'

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtag_repository = new hashtagRepository()
    }
    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g); // this regax extracts hashtags
        tags = tags.map((tag) => tag.substring(1)).map(tag => tag.toLowerCase());
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        let alreadypresenttags = await this.hashtag_repository.findByName(tags)
        let Newalreadypresenttags = alreadypresenttags.map(tag => tag.title)
        let newTags = tags.filter(tag => !Newalreadypresenttags.includes(tag))
        newTags = newTags.map(tag => {
            return { title: tag, tweets: [tweet.id] }
        })
        const response = await this.hashtag_repository.bulkCreate(newTags)
        alreadypresenttags.map((tag) => {
            console.log(tag)
            tag.tweets.push(tweet.id)
            tag.save()
        })
        return tweet;
    }
}

export default TweetService