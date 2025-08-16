# Etapa de compilación
FROM node:20-alpine AS builder
WORKDIR /api

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Etapa de producción
FROM node:20-alpine AS production
WORKDIR /api

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /api/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main.js"]
