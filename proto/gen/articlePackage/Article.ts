// Original file: proto/article/article.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ArticleItem as _articlePackage_ArticleItem, ArticleItem__Output as _articlePackage_ArticleItem__Output } from '../articlePackage/ArticleItem';
import type { ArticleItems as _articlePackage_ArticleItems, ArticleItems__Output as _articlePackage_ArticleItems__Output } from '../articlePackage/ArticleItems';
import type { Void as _articlePackage_Void, Void__Output as _articlePackage_Void__Output } from '../articlePackage/Void';

export interface ArticleClient extends grpc.Client {
  createArticle(argument: _articlePackage_ArticleItem, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_articlePackage_ArticleItem__Output>): grpc.ClientUnaryCall;
  createArticle(argument: _articlePackage_ArticleItem, metadata: grpc.Metadata, callback: grpc.requestCallback<_articlePackage_ArticleItem__Output>): grpc.ClientUnaryCall;
  createArticle(argument: _articlePackage_ArticleItem, options: grpc.CallOptions, callback: grpc.requestCallback<_articlePackage_ArticleItem__Output>): grpc.ClientUnaryCall;
  createArticle(argument: _articlePackage_ArticleItem, callback: grpc.requestCallback<_articlePackage_ArticleItem__Output>): grpc.ClientUnaryCall;
  createArticle(argument: _articlePackage_ArticleItem, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_articlePackage_ArticleItem__Output>): grpc.ClientUnaryCall;
  createArticle(argument: _articlePackage_ArticleItem, metadata: grpc.Metadata, callback: grpc.requestCallback<_articlePackage_ArticleItem__Output>): grpc.ClientUnaryCall;
  createArticle(argument: _articlePackage_ArticleItem, options: grpc.CallOptions, callback: grpc.requestCallback<_articlePackage_ArticleItem__Output>): grpc.ClientUnaryCall;
  createArticle(argument: _articlePackage_ArticleItem, callback: grpc.requestCallback<_articlePackage_ArticleItem__Output>): grpc.ClientUnaryCall;
  
  getArticles(argument: _articlePackage_Void, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_articlePackage_ArticleItems__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _articlePackage_Void, metadata: grpc.Metadata, callback: grpc.requestCallback<_articlePackage_ArticleItems__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _articlePackage_Void, options: grpc.CallOptions, callback: grpc.requestCallback<_articlePackage_ArticleItems__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _articlePackage_Void, callback: grpc.requestCallback<_articlePackage_ArticleItems__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _articlePackage_Void, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_articlePackage_ArticleItems__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _articlePackage_Void, metadata: grpc.Metadata, callback: grpc.requestCallback<_articlePackage_ArticleItems__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _articlePackage_Void, options: grpc.CallOptions, callback: grpc.requestCallback<_articlePackage_ArticleItems__Output>): grpc.ClientUnaryCall;
  getArticles(argument: _articlePackage_Void, callback: grpc.requestCallback<_articlePackage_ArticleItems__Output>): grpc.ClientUnaryCall;
  
}

export interface ArticleHandlers extends grpc.UntypedServiceImplementation {
  createArticle: grpc.handleUnaryCall<_articlePackage_ArticleItem__Output, _articlePackage_ArticleItem>;
  
  getArticles: grpc.handleUnaryCall<_articlePackage_Void__Output, _articlePackage_ArticleItems>;
  
}

export interface ArticleDefinition extends grpc.ServiceDefinition {
  createArticle: MethodDefinition<_articlePackage_ArticleItem, _articlePackage_ArticleItem, _articlePackage_ArticleItem__Output, _articlePackage_ArticleItem__Output>
  getArticles: MethodDefinition<_articlePackage_Void, _articlePackage_ArticleItems, _articlePackage_Void__Output, _articlePackage_ArticleItems__Output>
}
