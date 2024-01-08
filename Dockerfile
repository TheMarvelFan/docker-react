FROM node:16-alpine as builder
# Above command specifies that the first base image is for the buulding stage only

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node ./package.json ./
RUN npm install
COPY --chown=node:node ./ ./

RUN npm run build
# End of builder stage

FROM nginx
# no need to specify "as" here
COPY --from=builder /home/node/app/build /usr/share/nginx/html

# Above command specifies that we need to copy something from the builder phase, the path of what we have to copy, and the location where
# it has to be pasted (the pasting path is nginx standard default)