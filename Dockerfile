FROM node:16-alpine as builder
# Above command specifies that the first base image is for the building stage only
WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# End of builder stage

FROM nginx
# no need to specify "as" here
EXPOSE 80
# Above command specifies that the port 80 has to be linked with the running instance
COPY --from=builder /app/build /usr/share/nginx/html

# Above command specifies that we need to copy something from the builder phase, the path of what we have to copy, and the location where
# it has to be pasted (the pasting path is nginx standard default)