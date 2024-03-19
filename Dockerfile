ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-alpine
WORKDIR /app   
COPY package*.json ./  
RUN npm ci   
COPY . .  
RUN npm run build  
EXPOSE 3000 
CMD ["npm", "start"]  
