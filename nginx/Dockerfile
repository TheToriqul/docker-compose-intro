FROM nginx:alpine

# Install needed packages
RUN apk add --no-cache curl coreutils

# Add a custom hostname
ENV HOSTNAME=docker-nginx-host

# Copy all files from html directory
COPY html/ /usr/share/nginx/html/

# Copy nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy and set up entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]