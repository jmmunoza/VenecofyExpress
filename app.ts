import express, { Express } from 'express';
import dotenv from 'dotenv';
import artistRoutes from './src/route/artist-routes'
import albumRoutes from './src/route/album-routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// getting routes
app.use('/artist', artistRoutes);
app.use('/album', albumRoutes);

app.listen(port, () => console.log(`[server]: Server is running`));