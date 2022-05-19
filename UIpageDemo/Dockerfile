# Stage 1
FROM node:latest AS node 
WORKDIR /app 
COPY UIpageDemo .
RUN npm cache clean --force
RUN npm install --legacy-peer-deps
RUN npm run build --omit=dev

# Stage 2
FROM nginx:alpine
# /app/dist/uipage-demo - angular.json <"outputPath": "dist/uipage-demo",>
COPY --from=node /app/dist/uipage-demo /usr/share/nginx/html/
