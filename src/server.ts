import { resolve } from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../proto/gen/article";
import { ArticleHandlers } from "../proto/gen/articlePackage/Article";
import { ArticleItem } from "../proto/gen/articlePackage/ArticleItem";

const ARTICLE_PATH = resolve("proto/article/article.proto");

const articlePackageDef = protoLoader.loadSync(ARTICLE_PATH, {});
const { articlePackage } = grpc.loadPackageDefinition(articlePackageDef) as unknown as ProtoGrpcType;

const server = new grpc.Server();

let idTracker = 2;
const articles: ArticleItem[] = [];

server.addService(articlePackage.Article.service, {
  createArticle: (call, callback) => {
    const article = {
      id: idTracker++,
      title: call.request.title,
      description: call.request.description,
    };
    articles.push(article);

    callback(null, article);
  },
  getArticles: (call, callback) => callback(null, { items: articles }),
} as ArticleHandlers);

server.bindAsync("0.0.0.0:8080", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) return console.log(err);
  console.log(`server started on ${port}`);
  server.start();
});
