import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import { chatRoutes } from './backend/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// API route to handle chat messages
app.use('/api', chatRoutes);

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
