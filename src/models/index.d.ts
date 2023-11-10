import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMawwal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mawwal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullPath?: string | null;
  readonly filename?: string | null;
  readonly category?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMawwal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mawwal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullPath?: string | null;
  readonly filename?: string | null;
  readonly category?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mawwal = LazyLoading extends LazyLoadingDisabled ? EagerMawwal : LazyMawwal

export declare const Mawwal: (new (init: ModelInit<Mawwal>) => Mawwal) & {
  copyOf(source: Mawwal, mutator: (draft: MutableModel<Mawwal>) => MutableModel<Mawwal> | void): Mawwal;
}

type EagerPhoto = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Photo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly filename?: string | null;
  readonly fullPath?: string | null;
  readonly category?: string | null;
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
  readonly category?: string | null;
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
  readonly publisherEN?: string | null;
  readonly publisherAR?: string | null;
  readonly categoryEN?: string | null;
  readonly categoryAR?: string | null;
  readonly date?: string | null;
  readonly year?: number | null;
  readonly month?: number | null;
  readonly day?: number | null;
  readonly filename?: string | null;
  readonly fileType?: string | null;
  readonly parentPath?: string | null;
  readonly fullPath?: string | null;
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
  readonly publisherEN?: string | null;
  readonly publisherAR?: string | null;
  readonly categoryEN?: string | null;
  readonly categoryAR?: string | null;
  readonly date?: string | null;
  readonly year?: number | null;
  readonly month?: number | null;
  readonly day?: number | null;
  readonly filename?: string | null;
  readonly fileType?: string | null;
  readonly parentPath?: string | null;
  readonly fullPath?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Article = LazyLoading extends LazyLoadingDisabled ? EagerArticle : LazyArticle

export declare const Article: (new (init: ModelInit<Article>) => Article) & {
  copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}