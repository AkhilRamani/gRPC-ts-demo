import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ArticleClient as _articlePackage_ArticleClient, ArticleDefinition as _articlePackage_ArticleDefinition } from './articlePackage/Article';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  articlePackage: {
    Article: SubtypeConstructor<typeof grpc.Client, _articlePackage_ArticleClient> & { service: _articlePackage_ArticleDefinition }
    ArticleItem: MessageTypeDefinition
    ArticleItems: MessageTypeDefinition
    Void: MessageTypeDefinition
  }
}

