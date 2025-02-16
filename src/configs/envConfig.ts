import { z } from 'zod'

// Environment variables schema
const configSchema = z.object({
  VITE_NODE_ENV: z.string(),
  VITE_API_URL: z.string()
})

// Validate environment variables
const configProject = configSchema.safeParse({
  VITE_NODE_ENV: import.meta.env.VITE_NODE_ENV,
  VITE_API_URL: import.meta.env.VITE_API_URL
})

// Check for environment variable validation errors
if (!configProject.success) {
  console.error('Environment validation errors:', configProject.error.format())
  throw new Error('Environment variables is not valid!')
}

// Export the validated configurations
export const envConfig = configProject.data
