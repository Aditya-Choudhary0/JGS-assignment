# Use official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code
COPY frontend/ .

# Build the React app
RUN npm run build

# Expose the port for React app (default port 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
