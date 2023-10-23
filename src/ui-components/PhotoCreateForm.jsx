/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Photo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PhotoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    filename: "",
    fullPath: "",
  };
  const [filename, setFilename] = React.useState(initialValues.filename);
  const [fullPath, setFullPath] = React.useState(initialValues.fullPath);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFilename(initialValues.filename);
    setFullPath(initialValues.fullPath);
    setErrors({});
  };
  const validations = {
    filename: [],
    fullPath: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          filename,
          fullPath,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Photo(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PhotoCreateForm")}
      {...rest}
    >
      <TextField
        label="Filename"
        isRequired={false}
        isReadOnly={false}
        value={filename}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              filename: value,
              fullPath,
            };
            const result = onChange(modelFields);
            value = result?.filename ?? value;
          }
          if (errors.filename?.hasError) {
            runValidationTasks("filename", value);
          }
          setFilename(value);
        }}
        onBlur={() => runValidationTasks("filename", filename)}
        errorMessage={errors.filename?.errorMessage}
        hasError={errors.filename?.hasError}
        {...getOverrideProps(overrides, "filename")}
      ></TextField>
      <TextField
        label="Full path"
        isRequired={false}
        isReadOnly={false}
        value={fullPath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              filename,
              fullPath: value,
            };
            const result = onChange(modelFields);
            value = result?.fullPath ?? value;
          }
          if (errors.fullPath?.hasError) {
            runValidationTasks("fullPath", value);
          }
          setFullPath(value);
        }}
        onBlur={() => runValidationTasks("fullPath", fullPath)}
        errorMessage={errors.fullPath?.errorMessage}
        hasError={errors.fullPath?.hasError}
        {...getOverrideProps(overrides, "fullPath")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
