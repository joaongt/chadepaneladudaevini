# Install dependencies
RUN npm install

# Copy the current directory contents to /app
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]