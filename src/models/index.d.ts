import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly filename?: string | null;
  readonly fullPath?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly filename?: string | null;
  readonly fullPath?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Photo = LazyLoading extends LazyLoadingDisabled ? EagerPhoto : LazyPhoto

export declare const Photo: (new (init: ModelInit<Photo>) => Photo) & {
  copyOf(source: Photo, mutator: (draft: MutableModel<Photo>) => MutableModel<Photo> | void): Photo;
}

type EagerArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly publisherEN: string;
  readonly publisherAR: string;
  readonly categoryEN: string;
  readonly categoryAR: string;
  readonly date: string;
  readonly year?: number | null;
  readonly month?: number | null;
  readonly day?: number | null;
  readonly filename: string;
  readonly fileType: string;
  readonly parentPath: string;
  readonly fullPath: string;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly publisherEN: string;
  readonly publisherAR: string;
  readonly categoryEN: string;
  readonly categoryAR: string;
  readonly date: string;
  readonly year?: number | null;
  readonly month?: number | null;
  readonly day?: number | null;
  readonly filename: string;
  readonly fileType: string;
  readonly parentPath: string;
  readonly fullPath: string;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Article = LazyLoading extends LazyLoadingDisabled ? EagerArticle : LazyArticle

export declare const Article: (new (init: ModelInit<Article>) => Article) & {
  copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}