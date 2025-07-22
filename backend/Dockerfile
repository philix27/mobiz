
FROM node:22-alpine AS builder

ENV NODE_ENV=build

USER node
# Set working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install packages
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build NestJS app
RUN yarn build

#! Stage 2: Production Image
FROM node:20-alpine

WORKDIR /app

# Copy only built files and dependencies
# Copy only what's needed for runtime
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./


# Use non-root user for running the app
USER node

# Expose the NestJS port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main.js"]