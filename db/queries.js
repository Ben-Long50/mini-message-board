import pool from './pool.js';

export async function getMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

export async function addMessage(name, message) {
  await pool.query('INSERT INTO messages (name, message) VALUES ($1, $2)', [
    name,
    message,
  ]);
}

export async function deleteMessage(id) {
  await pool.query('DELETE FROM messages WHERE id = $1', [id]);
}
