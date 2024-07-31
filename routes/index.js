import express from 'express';
import { format } from 'date-fns';
import { addMessage, getMessages, deleteMessage } from '../db/queries.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const messages = await getMessages();
  const formattedMessages = messages.map((message) => {
    const date = format(message.timestamp, 'PP');
    const time = format(message.timestamp, 'pp');
    return {
      ...message,
      timestamp: `${date} at ${time}`,
    };
  });
  res.render('index', {
    title: 'Mini Messageboard',
    messages: formattedMessages,
  });
});

router.post('/new-message', async (req, res, next) => {
  await addMessage(req.body.name, req.body.message);
  res.redirect('/');
});

router.post('/delete', async (req, res) => {
  await deleteMessage(req.body.id);
  res.redirect('/');
});

export default router;
