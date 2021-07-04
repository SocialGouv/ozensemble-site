FROM ghcr.io/socialgouv/docker/nginx4spa:6.26.3
COPY ./out /usr/share/nginx/html
