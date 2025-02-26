# Use an official Node.js image as a base
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm i --legacy-peer-deps

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Use an Nginx image to serve the built app
FROM nginx:alpine

# Copy the build output to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

