FROM oven/bun:1

WORKDIR /user/src/app

COPY ./packages  ./packages
COPY ./package.json   ./package.json

COPY ./turbo.json   ./turbo.json
COPY ./bun.lock     ./bun.lock

COPY ./apps/ws-server   ./apps/ws-server

RUN bun install
RUN bun run db:generate

EXPOSE 3001

CMD ["bun", "run", "start:ws"]