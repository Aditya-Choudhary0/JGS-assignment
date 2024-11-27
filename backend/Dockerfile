# Use official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend application code
COPY backend/ .

# Expose the backend port (default port 5000)
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
