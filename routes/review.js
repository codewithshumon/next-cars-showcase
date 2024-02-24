import express from 'express';

import {
  getAllReviews,
  createReview,
} from '../controllers/reviewController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router({ mergeParams: true });
//"mergeParams: true" use to marge route with doctor route

//we need to put "authenticate and restrict middlware" where we put { mergeParams: true }
router
  .route('/')
  .get(getAllReviews)
  .post(authenticate, restrict(['patient']), createReview);

// Diffrant way to do that
// router.get('/', getAllReviews);
// router.put('/', authenticate, restrict(['patient']), createReview);

export default router;
