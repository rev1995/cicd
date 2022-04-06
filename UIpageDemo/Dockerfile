# Stage 1
FROM node:latest AS node
# changing working directory 
WORKDIR /app 
COPY . .
#installing npm modules
RUN npm install || :
RUN npm run build --prod || :

# Stage 2
FROM nginx:alpine

# /app/dist/uipage-demo from angular.json <"outputPath": "dist/uipage-demo",>
COPY --from=node /app/dist/uipage-demo /usr/share/nginx/html/