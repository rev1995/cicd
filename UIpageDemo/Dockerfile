# Stage 1
FROM node:latest AS node 
WORKDIR /app 
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
# /app/dist/uipage-demo - angular.json <"outputPath": "dist/uipage-demo",>
COPY --from=node /app/dist/uipage-demo /usr/share/nginx/html/
