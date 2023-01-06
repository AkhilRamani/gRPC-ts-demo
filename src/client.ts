import { resolve } from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "../proto/gen/article";
import { ArticleHandlers } from "../proto/gen/articlePackage/Article";

const ARTICLE_PATH = resolve("proto/article/article.proto");

const articlePackageDef = protoLoader.loadSync(ARTICLE_PATH, {});
const { articlePackage } = grpc.loadPackageDefinition(articlePackageDef) as unknown as ProtoGrpcType;

const client = new articlePackage.Article("0.0.0.0:8080", grpc.credentials.createInsecure());

client.createArticle({ title: "test" }, (err, result) => {
  if (err) console.log(err);
  console.log(result);
});

client.getArticles({}, (err, result) => {
  if (err) console.log(err);
  console.log(result?.items);
});
