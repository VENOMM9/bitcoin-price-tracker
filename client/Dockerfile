# client/Dockerfile
# Use the official Node image
FROM node:20.10.0

# Set the working directory
WORKDIR /app/client

# Copy the package files
COPY package*.json ./

# Install dependencies using Yarn
RUN yarn install

RUN yarn build

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3450

# Command to run the application
CMD ["yarn", "start"]
