import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3000; // Change this to your desired port number

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
