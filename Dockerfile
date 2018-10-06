FROM nginx:1.15.4-alpine
COPY ./build/ /app
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
