/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMawwal = /* GraphQL */ `
  mutation CreateMawwal(
    $input: CreateMawwalInput!
    $condition: ModelMawwalConditionInput
  ) {
    createMawwal(input: $input, condition: $condition) {
      id
      fullPath
      filename
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateMawwal = /* GraphQL */ `
  mutation UpdateMawwal(
    $input: UpdateMawwalInput!
    $condition: ModelMawwalConditionInput
  ) {
    updateMawwal(input: $input, condition: $condition) {
      id
      fullPath
      filename
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteMawwal = /* GraphQL */ `
  mutation DeleteMawwal(
    $input: DeleteMawwalInput!
    $condition: ModelMawwalConditionInput
  ) {
    deleteMawwal(input: $input, condition: $condition) {
      id
      fullPath
      filename
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
      id
      filename
      fullPath
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
      id
      filename
      fullPath
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
      id
      filename
      fullPath
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      id
      publisherEN
      publisherAR
      categoryEN
      categoryAR
      date
      year
      month
      day
      filename
      fileType
      parentPath
      fullPath
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
      id
      publisherEN
      publisherAR
      categoryEN
      categoryAR
      date
      year
      month
      day
      filename
      fileType
      parentPath
      fullPath
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
      id
      publisherEN
      publisherAR
      categoryEN
      categoryAR
      date
      year
      month
      day
      filename
      fileType
      parentPath
      fullPath
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
