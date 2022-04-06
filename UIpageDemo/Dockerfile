# Stage 1
FROM node:latest AS node 
WORKDIR /app 
COPY . .
#installing npm modules
RUN npm install || :
RUN npm run build --prod || :

# Stage 2
FROM nginx:alpine
<<<<<<< HEAD

# /app/dist/uipage-demo from angular.json <"outputPath": "dist/uipage-demo",>
COPY --from=node /app/dist/uipage-demo /usr/share/nginx/html/
=======
# /app/dist/uipage-demo - angular.json <"outputPath": "dist/uipage-demo",>
COPY --from=node /app/dist/uipage-demo /usr/share/nginx/html/
>>>>>>> 021b94e1a39e8456228f506b1c320312c952cbca
