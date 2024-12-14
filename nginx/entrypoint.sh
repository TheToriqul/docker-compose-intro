#!/bin/sh

# Get container name using docker env variable
CONTAINER_NAME=$HOSTNAME
HOST_NAME=$(cat /etc/hostname)
IP_ADDRESS=$(hostname -i)

# Print values for debugging
echo "Container Name: $CONTAINER_NAME"
echo "Host Name: $HOST_NAME"
echo "IP Address: $IP_ADDRESS"

# Replace placeholders in index.html
sed -i "s/CONTAINER_NAME_PLACEHOLDER/$CONTAINER_NAME/g" /usr/share/nginx/html/index.html
sed -i "s/HOSTNAME_PLACEHOLDER/$HOST_NAME/g" /usr/share/nginx/html/index.html
sed -i "s/IP_ADDRESS_PLACEHOLDER/$IP_ADDRESS/g" /usr/share/nginx/html/index.html

# Start nginx
nginx -g 'daemon off;'