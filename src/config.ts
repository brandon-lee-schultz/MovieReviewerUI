// config.ts
const apiUrlByEnvironment = {
    development: 'https://localhost:7175/',
    production: process.env.API_URL || 'https://api.example.com',
  };
  
  // Ensure the environment is one of the allowed values
  type Environment = 'development' | 'production';
  
export const apiUrl = apiUrlByEnvironment[process.env.NODE_ENV as Environment] || apiUrlByEnvironment.development;