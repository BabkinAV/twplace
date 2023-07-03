# Use node alpine as it's a small node image
FROM node:alpine

# Set /app as the working directory
WORKDIR /app

# Ensure port 3000 is accessible to our system
EXPOSE 3000

# check if "node_modules" is present, install dependencies if not and run dev command afterwards 
CMD [ -d "node_modules" ] && npm run dev || npm ci && npm run dev