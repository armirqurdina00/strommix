# Stage 1: Build backend and frontend
FROM node:18-slim AS builder

WORKDIR /app

COPY ./package*.json ./
RUN npm ci --prefix . --omit=dev

# Copy source code
COPY . .

# Build frontend
WORKDIR /app
RUN npm run build

# Stage 2: Create production image
FROM node:18-slim

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]