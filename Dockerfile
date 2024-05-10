# Estágio de construção do frontend
FROM node:14 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Estágio de construção do backend
FROM node:14 AS backend-build
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./

# Estágio de produção
FROM node:14-alpine
WORKDIR /app
COPY --from=frontend-build /app/frontend/build ./frontend/build
COPY --from=backend-build /app/backend ./backend
WORKDIR /app/backend
CMD ["npm", "start"]