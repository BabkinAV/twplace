# Use node alpine as it's a small node image
FROM node:alpine

# Set /app as the working directory
WORKDIR /app

COPY package.json .

COPY package-lock.json .

# Install dependencies in /app
RUN npm install

# Copy the rest of our Next.js folder into /app
COPY . /app

# Ensure port 3000 is accessible to our system
EXPOSE 3000

# Run yarn dev, as we would via the command line 
CMD ["npm", "run", "dev"]