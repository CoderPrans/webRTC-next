export default (req, res) => {
  console.log(req.cookies);
  res.end('Hello World!');
};
