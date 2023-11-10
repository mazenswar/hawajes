/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Mawwal } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MawwalUpdateFormInputValues = {
    fullPath?: string;
    filename?: string;
    category?: string;
};
export declare type MawwalUpdateFormValidationValues = {
    fullPath?: ValidationFunction<string>;
    filename?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MawwalUpdateFormOverridesProps = {
    MawwalUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullPath?: PrimitiveOverrideProps<TextFieldProps>;
    filename?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MawwalUpdateFormProps = React.PropsWithChildren<{
    overrides?: MawwalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mawwal?: Mawwal;
    onSubmit?: (fields: MawwalUpdateFormInputValues) => MawwalUpdateFormInputValues;
    onSuccess?: (fields: MawwalUpdateFormInputValues) => void;
    onError?: (fields: MawwalUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MawwalUpdateFormInputValues) => MawwalUpdateFormInputValues;
    onValidate?: MawwalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MawwalUpdateForm(props: MawwalUpdateFormProps): React.ReactElement;
