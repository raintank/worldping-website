FROM nginx

# Automatically build site
COPY build/dist /usr/share/nginx/html

