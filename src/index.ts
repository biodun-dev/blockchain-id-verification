// src/index.ts
import express from 'express';
import userRoutes from './routes/userRoutes';
import verificationRoutes from './routes/verificationRoutes';
import blockchainRoutes from './routes/blockchainRoutes';
import { errorHandler } from './middlewares/errorHandler';
import swaggerUi from 'swagger-ui-express';
import './types/express';
import swaggerSpecs from '../swagger/swaggerConfig';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/verifications', verificationRoutes);
app.use('/api/blockchain', blockchainRoutes);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Use the error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Swagger docs available at http://localhost:3000/api-docs');
});
