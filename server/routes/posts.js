import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/create', createPost);

// router.get('/', (req, res) => {
//     res.send('THIS WORKS!');
// });

export default router;