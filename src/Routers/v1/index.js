import { CreateTweet } from '../../controllers/tweet-controller.js'
import express from 'express'

const router = express.Router()

router.post('/tweets', CreateTweet)

export default router