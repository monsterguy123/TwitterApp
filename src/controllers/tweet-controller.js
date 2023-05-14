import TweetService from '../services/tweet-service.js'

const tweetService = new TweetService()

export const CreateTweet = async(req, res) => {
    console.log(req.body)
    try {
        const response = await tweetService.create(req.body)

        res.status(200).json({
            success: true,
            message: "successfully create a post",
            data: response,
            err: {}
        })
    } catch (error) {

        res.status(200).json({
            success: false,
            message: "something went wrong",
            data: {},
            err: error
        })
    }
}