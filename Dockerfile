# Use the Node.js image as the base
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller image for the production stage
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port that the app runs on
EXPOSE 3000

# Set environment variable for production
ENV NODE_ENV=production

# Start the Next.js application
CMD ["npm", "run", "start"]
