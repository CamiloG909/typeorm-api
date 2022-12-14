import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
import indexRoutes from './routes/user.routes';
app.use(indexRoutes);

export default app;
