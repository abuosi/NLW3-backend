FROM node:12

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN yarn install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3333
CMD [ "yarn", "dev" ]