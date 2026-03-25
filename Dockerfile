# Stage 1 — Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 — Production
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/server.js ./
COPY --from=builder /app/api ./api
EXPOSE 3000
CMD ["node", "server.js"]
