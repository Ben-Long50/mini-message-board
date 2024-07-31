import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

export default router;
