# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]