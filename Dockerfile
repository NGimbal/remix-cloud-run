# # base node image
# # https://github.com/moby/buildkit/issues/1271
FROM node:16-bullseye-slim as base
ARG REMIX_TOKEN
ENV REMIX_TOKEN=${REMIX_TOKEN}

# # Build the dev image
FROM base as build
RUN mkdir /app/
WORKDIR /app/
COPY . /app
RUN npm install
RUN npm run build

# # Get the production modules
FROM base as production-deps
RUN mkdir /app/
WORKDIR /app/
COPY --from=build /app/node_modules /app/node_modules
ADD package.json package-lock.json .npmrc /app/
RUN npm prune --production

# Pull out the build files and do a production install
FROM base
ENV NODE_ENV=production
RUN mkdir /app/
WORKDIR /app/
ADD package.json package-lock.json .npmrc /app/
COPY --from=build /app/public /app/public
COPY --from=build /app/build /app/build
COPY --from=production-deps /app/node_modules /app/node_modules
CMD ["node", "server/index.js"]