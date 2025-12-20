import express from "express";

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log("hello form jeevan Aaahar server");
   console.log(`server is running on http://localhost:${port}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
export default app;
