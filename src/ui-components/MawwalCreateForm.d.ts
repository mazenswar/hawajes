/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MawwalCreateFormInputValues = {
    fullPath?: string;
    filename?: string;
    category?: string;
};
export declare type MawwalCreateFormValidationValues = {
    fullPath?: ValidationFunction<string>;
    filename?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MawwalCreateFormOverridesProps = {
    MawwalCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullPath?: PrimitiveOverrideProps<TextFieldProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MawwalCreateFormProps = React.PropsWithChildren<{
    overrides?: MawwalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MawwalCreateFormInputValues) => MawwalCreateFormInputValues;
    onSuccess?: (fields: MawwalCreateFormInputValues) => void;
    onError?: (fields: MawwalCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MawwalCreateFormInputValues) => MawwalCreateFormInputValues;
    onValidate?: MawwalCreateFormValidationValues;
} & React.CSSProperties>;
export default function MawwalCreateForm(props: MawwalCreateFormProps): React.ReactElement;
