import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

export default router;
