# Stage 1: Build the app
FROM node:23-alpine AS builder

WORKDIR /app

# install dependencies:
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx index page.

RUN rm -rf /usr/share/nginx/html/*

#Copy build app from builder
COPY --from=builder /app/dist /usr/share/nginx/html

#Copy Custom nginx config if needed
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
