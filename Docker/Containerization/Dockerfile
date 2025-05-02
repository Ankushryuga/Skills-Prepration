# FOR NODEJS
FROM node:22.15-alpine
WORKDIR /usr/src/app
ENV NODE_ENV production

COPY package*.json ./
RUN npm ci --only=production

RUN npm install

COPY ./source_code_directory .

EXPOSE 3000 #port 
# RUN ["npm", "run", "dev"]    # because in package.json i had mentioned npm run dev
RUN ["node", "index.js"]


# To build the this dockerfile: => docker build -t name:0 . 
