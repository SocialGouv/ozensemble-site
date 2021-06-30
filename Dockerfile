FROM ghcr.io/socialgouv/docker/nginx4spa:6.26.2
COPY ./out /usr/share/nginx/html
