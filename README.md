# KING Consumer Product Competition

A web platform for managing and participating in KING's Consumer Product Competition. Users can submit designs, vote on entries, and view winners.

## Project Structure

```
king-competition/
├── frontend/           # React TypeScript frontend
├── backend/           # Node.js Express backend
└── docker/            # Docker configuration files
```

## Features

- User registration and authentication
- Design submission with image upload
- Randomized voting system
- Winner display and rankings
- Admin dashboard with statistics
- Secure API endpoints
- Responsive design
- User authentication with email/password and Google
- Design submission system
- Voting mechanism
- Tournament phases (submission, voting, completed)
- Admin controls for managing tournaments and submissions

## Tech Stack

- Frontend: React, TypeScript, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Database: PostgreSQL
- Authentication: JWT
- File Storage: AWS S3
- Containerization: Docker

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- Docker (optional)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BenPomme/projectCP.git
cd projectCP
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:
```bash
# Frontend (.env)
VITE_API_URL=http://localhost:3000

# Backend (.env)
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/king_competition
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_BUCKET_NAME=your_bucket_name
```

4. Start the development servers:
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm run dev
```

## Development

- Frontend runs on: http://localhost:5173
- Backend API runs on: http://localhost:3000

## Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test
```

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch.

You can also deploy manually using the included script:
```
./scripts/deploy.sh
```

## Tournament Management

The application supports multiple tournament phases:

1. **Submission Phase** - Users can submit their designs
2. **Voting Phase** - Users can vote on submitted designs
3. **Completed Phase** - The tournament is finished, winners are displayed

Admins can manage tournament phases and timers through the admin interface at `/admin/settings`.

## License

This project is proprietary and confidential. 