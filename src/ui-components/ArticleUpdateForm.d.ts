/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Article } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ArticleUpdateFormInputValues = {
    publisherEN?: string;
    publisherAR?: string;
    categoryEN?: string;
    categoryAR?: string;
    date?: string;
    year?: number;
    month?: number;
    day?: number;
    filename?: string;
    fileType?: string;
    parentPath?: string;
    fullPath?: string;
    title?: string;
};
export declare type ArticleUpdateFormValidationValues = {
    publisherEN?: ValidationFunction<string>;
    publisherAR?: ValidationFunction<string>;
    categoryEN?: ValidationFunction<string>;
    categoryAR?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
    month?: ValidationFunction<number>;
    day?: ValidationFunction<number>;
    filename?: ValidationFunction<string>;
    fileType?: ValidationFunction<string>;
    parentPath?: ValidationFunction<string>;
    fullPath?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ArticleUpdateFormOverridesProps = {
    ArticleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    publisherEN?: PrimitiveOverrideProps<TextFieldProps>;
    publisherAR?: PrimitiveOverrideProps<TextFieldProps>;
    categoryEN?: PrimitiveOverrideProps<TextFieldProps>;
    categoryAR?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
    month?: PrimitiveOverrideProps<TextFieldProps>;
    day?: PrimitiveOverrideProps<TextFieldProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    fileType?: PrimitiveOverrideProps<TextFieldProps>;
    parentPath?: PrimitiveOverrideProps<TextFieldProps>;
    fullPath?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ArticleUpdateFormProps = React.PropsWithChildren<{
    overrides?: ArticleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    article?: Article;
    onSubmit?: (fields: ArticleUpdateFormInputValues) => ArticleUpdateFormInputValues;
    onSuccess?: (fields: ArticleUpdateFormInputValues) => void;
    onError?: (fields: ArticleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ArticleUpdateFormInputValues) => ArticleUpdateFormInputValues;
    onValidate?: ArticleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ArticleUpdateForm(props: ArticleUpdateFormProps): React.ReactElement;
