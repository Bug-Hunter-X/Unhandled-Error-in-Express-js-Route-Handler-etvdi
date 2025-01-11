const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid number
  if (isNaN(userId) || parseInt(userId) < 0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... (rest of the user data fetching logic with error handling)
  // Example error handling using try...catch
  try {
    // ... code to fetch user data
    res.json({ user: /* user data */ });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});