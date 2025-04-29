import "dotenv/config";
import { ENV } from "./application/@shared/env";
import http from "node:http";
import Koa from "koa";
import cors from "@koa/cors";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { koaMiddleware } from "@as-integrations/koa";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import { CustomErrorResponse } from "./application/@shared/error";
import { resolvers } from "./application/gql/resolvers";
import { readFileSync } from "node:fs";
import * as path from "node:path";
import { gql } from "graphql-tag";

const app = new Koa();
const httpServer = http.createServer(app.callback());

const typeDefs = gql(
  readFileSync(path.join(__dirname, "application", "gql", "schema.gql"), {
    encoding: "utf-8",
  })
);

async function bootstrap() {
  try {
    console.log(ENV.MONGO_URL_CONNECTION);

    await mongoose.connect(ENV.MONGO_URL_CONNECTION);

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      formatError: (formattedError, error: any) => {
        let errorObject;
        try {
          errorObject = JSON.parse(error.message);
        } catch {
          console.error(error);
          return {
            message: "Internal server error",
            status: 500,
          };
        }

        if (errorObject.message && errorObject.statusCode) {
          return {
            message: errorObject.message,
            status: errorObject.statusCode,
          };
        }

        return {
          message: "Internal server error",
          status: 500,
        };
      },
    });

    await server.start();

    app.use(cors());
    app.use(bodyParser());
    app.use(
      koaMiddleware(server, {
        context: async ({ ctx }) => ({ token: ctx.headers.token }),
      })
    );

    await new Promise((resolve) =>
      httpServer.listen({ port: 3333 }, resolve as any)
    );

    console.log(`🚀 Server ready at http://localhost:3333`);
  } catch (e) {
    console.error(e);
  }
}

bootstrap();
