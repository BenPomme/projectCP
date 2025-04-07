import express from 'express';
import cors from 'cors';
import { DataSource } from 'typeorm';
import userRoutes from './routes/userRoutes';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { validationResult } from 'express-validator';
import type { ValidationError } from 'express-validator';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import { UserService } from './services/userService';
import { errorHandler } from './utils/errorHandler';
import { 
  SERVER_CONFIG, 
  DB_CONFIG, 
  SECURITY_CONFIG, 
  APP_CONFIG 
} from './config/env';

const app = express();
const port = SERVER_CONFIG.PORT;

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: SECURITY_CONFIG.RATE_LIMIT.WINDOW_MS,
  max: SECURITY_CONFIG.RATE_LIMIT.MAX_REQUESTS,
  message: SECURITY_CONFIG.RATE_LIMIT.MESSAGE
});
app.use(`${SERVER_CONFIG.API_PREFIX}/`, limiter);

// CORS configuration
app.use(cors({
  origin: SERVER_CONFIG.FRONTEND_URL,
  credentials: true
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Database connection
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DB_CONFIG.HOST,
  port: DB_CONFIG.PORT,
  username: DB_CONFIG.USERNAME,
  password: DB_CONFIG.PASSWORD,
  database: DB_CONFIG.DATABASE,
  synchronize: DB_CONFIG.SYNCHRONIZE,
  logging: DB_CONFIG.LOGGING,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
});

// Routes
app.use(`${SERVER_CONFIG.API_PREFIX}/users`, userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: APP_CONFIG.APP_NAME,
    documentation: '/api-docs'
  });
});

// Error handling middleware
app.use(errorHandler);

// Initialize database connection
AppDataSource.initialize()
  .then(() => {
    console.log('Database connection established');
    
    // Start server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`API Documentation available at http://localhost:${port}/api-docs`);
      console.log(`Environment: ${SERVER_CONFIG.NODE_ENV}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  }); 