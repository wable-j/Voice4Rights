import express from 'express'
import {post, getAllPost, deletePost, likePost} from '../controllers/post.js'


const router = express.Router()

router.post('/post', post)
router.get('/get', getAllPost)
router.delete('/delete/:id', deletePost);
router.patch('/vote/:id', likePost);

export default router;