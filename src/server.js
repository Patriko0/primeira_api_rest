import app from './app';

const port = process.env.APP_PORT || 3333;
app.listen(port, () => {
  console.log('Escutando na porta', port);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
