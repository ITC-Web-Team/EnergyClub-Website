# Use the Node.js image
FROM node:18-alpine as builder

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm build

# Run the application with a smaller base image
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app .

CMD ["pnpm", "start"]
