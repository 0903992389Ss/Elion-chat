const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  let response = "Xin chào, bạn cần gì?";

  if (userMessage.includes("em")) {
    response = "Em là một AI đáng yêu!";
  } else if (userMessage.includes("anh")) {
    response = "Anh đang ở đây!";
  }

  res.json({ reply: response });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
