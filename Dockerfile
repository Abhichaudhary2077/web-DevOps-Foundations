FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy website files
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Build-time metadata
ARG BUILD_SHA=local
ARG BUILD_DATE=unknown

# Create build-info.json
RUN echo "{ \
  \"sha\": \"${BUILD_SHA}\", \
  \"date\": \"${BUILD_DATE}\" \
}" > /usr/share/nginx/html/build-info.json
