/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Article } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ArticleCreateForm(props) {
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
    publisherEN: "",
    publisherAR: "",
    categoryEN: "",
    categoryAR: "",
    date: "",
    year: "",
    month: "",
    day: "",
    filename: "",
    fileType: "",
    parentPath: "",
    fullPath: "",
    title: "",
  };
  const [publisherEN, setPublisherEN] = React.useState(
    initialValues.publisherEN
  );
  const [publisherAR, setPublisherAR] = React.useState(
    initialValues.publisherAR
  );
  const [categoryEN, setCategoryEN] = React.useState(initialValues.categoryEN);
  const [categoryAR, setCategoryAR] = React.useState(initialValues.categoryAR);
  const [date, setDate] = React.useState(initialValues.date);
  const [year, setYear] = React.useState(initialValues.year);
  const [month, setMonth] = React.useState(initialValues.month);
  const [day, setDay] = React.useState(initialValues.day);
  const [filename, setFilename] = React.useState(initialValues.filename);
  const [fileType, setFileType] = React.useState(initialValues.fileType);
  const [parentPath, setParentPath] = React.useState(initialValues.parentPath);
  const [fullPath, setFullPath] = React.useState(initialValues.fullPath);
  const [title, setTitle] = React.useState(initialValues.title);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPublisherEN(initialValues.publisherEN);
    setPublisherAR(initialValues.publisherAR);
    setCategoryEN(initialValues.categoryEN);
    setCategoryAR(initialValues.categoryAR);
    setDate(initialValues.date);
    setYear(initialValues.year);
    setMonth(initialValues.month);
    setDay(initialValues.day);
    setFilename(initialValues.filename);
    setFileType(initialValues.fileType);
    setParentPath(initialValues.parentPath);
    setFullPath(initialValues.fullPath);
    setTitle(initialValues.title);
    setErrors({});
  };
  const validations = {
    publisherEN: [],
    publisherAR: [],
    categoryEN: [],
    categoryAR: [],
    date: [],
    year: [],
    month: [],
    day: [],
    filename: [],
    fileType: [],
    parentPath: [],
    fullPath: [],
    title: [],
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
          publisherEN,
          publisherAR,
          categoryEN,
          categoryAR,
          date,
          year,
          month,
          day,
          filename,
          fileType,
          parentPath,
          fullPath,
          title,
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
          await DataStore.save(new Article(modelFields));
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
      {...getOverrideProps(overrides, "ArticleCreateForm")}
      {...rest}
    >
      <TextField
        label="Publisher en"
        isRequired={false}
        isReadOnly={false}
        value={publisherEN}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publisherEN: value,
              publisherAR,
              categoryEN,
              categoryAR,
              date,
              year,
              month,
              day,
              filename,
              fileType,
              parentPath,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.publisherEN ?? value;
          }
          if (errors.publisherEN?.hasError) {
            runValidationTasks("publisherEN", value);
          }
          setPublisherEN(value);
        }}
        onBlur={() => runValidationTasks("publisherEN", publisherEN)}
        errorMessage={errors.publisherEN?.errorMessage}
        hasError={errors.publisherEN?.hasError}
        {...getOverrideProps(overrides, "publisherEN")}
      ></TextField>
      <TextField
        label="Publisher ar"
        isRequired={false}
        isReadOnly={false}
        value={publisherAR}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR: value,
              categoryEN,
              categoryAR,
              date,
              year,
              month,
              day,
              filename,
              fileType,
              parentPath,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.publisherAR ?? value;
          }
          if (errors.publisherAR?.hasError) {
            runValidationTasks("publisherAR", value);
          }
          setPublisherAR(value);
        }}
        onBlur={() => runValidationTasks("publisherAR", publisherAR)}
        errorMessage={errors.publisherAR?.errorMessage}
        hasError={errors.publisherAR?.hasError}
        {...getOverrideProps(overrides, "publisherAR")}
      ></TextField>
      <TextField
        label="Category en"
        isRequired={false}
        isReadOnly={false}
        value={categoryEN}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN: value,
              categoryAR,
              date,
              year,
              month,
              day,
              filename,
              fileType,
              parentPath,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.categoryEN ?? value;
          }
          if (errors.categoryEN?.hasError) {
            runValidationTasks("categoryEN", value);
          }
          setCategoryEN(value);
        }}
        onBlur={() => runValidationTasks("categoryEN", categoryEN)}
        errorMessage={errors.categoryEN?.errorMessage}
        hasError={errors.categoryEN?.hasError}
        {...getOverrideProps(overrides, "categoryEN")}
      ></TextField>
      <TextField
        label="Category ar"
        isRequired={false}
        isReadOnly={false}
        value={categoryAR}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR: value,
              date,
              year,
              month,
              day,
              filename,
              fileType,
              parentPath,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.categoryAR ?? value;
          }
          if (errors.categoryAR?.hasError) {
            runValidationTasks("categoryAR", value);
          }
          setCategoryAR(value);
        }}
        onBlur={() => runValidationTasks("categoryAR", categoryAR)}
        errorMessage={errors.categoryAR?.errorMessage}
        hasError={errors.categoryAR?.hasError}
        {...getOverrideProps(overrides, "categoryAR")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR,
              date: value,
              year,
              month,
              day,
              filename,
              fileType,
              parentPath,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={year}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR,
              date,
              year: value,
              month,
              day,
              filename,
              fileType,
              parentPath,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Month"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={month}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR,
              date,
              year,
              month: value,
              day,
              filename,
              fileType,
              parentPath,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.month ?? value;
          }
          if (errors.month?.hasError) {
            runValidationTasks("month", value);
          }
          setMonth(value);
        }}
        onBlur={() => runValidationTasks("month", month)}
        errorMessage={errors.month?.errorMessage}
        hasError={errors.month?.hasError}
        {...getOverrideProps(overrides, "month")}
      ></TextField>
      <TextField
        label="Day"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={day}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR,
              date,
              year,
              month,
              day: value,
              filename,
              fileType,
              parentPath,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.day ?? value;
          }
          if (errors.day?.hasError) {
            runValidationTasks("day", value);
          }
          setDay(value);
        }}
        onBlur={() => runValidationTasks("day", day)}
        errorMessage={errors.day?.errorMessage}
        hasError={errors.day?.hasError}
        {...getOverrideProps(overrides, "day")}
      ></TextField>
      <TextField
        label="Filename"
        isRequired={false}
        isReadOnly={false}
        value={filename}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR,
              date,
              year,
              month,
              day,
              filename: value,
              fileType,
              parentPath,
              fullPath,
              title,
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
        label="File type"
        isRequired={false}
        isReadOnly={false}
        value={fileType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR,
              date,
              year,
              month,
              day,
              filename,
              fileType: value,
              parentPath,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.fileType ?? value;
          }
          if (errors.fileType?.hasError) {
            runValidationTasks("fileType", value);
          }
          setFileType(value);
        }}
        onBlur={() => runValidationTasks("fileType", fileType)}
        errorMessage={errors.fileType?.errorMessage}
        hasError={errors.fileType?.hasError}
        {...getOverrideProps(overrides, "fileType")}
      ></TextField>
      <TextField
        label="Parent path"
        isRequired={false}
        isReadOnly={false}
        value={parentPath}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR,
              date,
              year,
              month,
              day,
              filename,
              fileType,
              parentPath: value,
              fullPath,
              title,
            };
            const result = onChange(modelFields);
            value = result?.parentPath ?? value;
          }
          if (errors.parentPath?.hasError) {
            runValidationTasks("parentPath", value);
          }
          setParentPath(value);
        }}
        onBlur={() => runValidationTasks("parentPath", parentPath)}
        errorMessage={errors.parentPath?.errorMessage}
        hasError={errors.parentPath?.hasError}
        {...getOverrideProps(overrides, "parentPath")}
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
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR,
              date,
              year,
              month,
              day,
              filename,
              fileType,
              parentPath,
              fullPath: value,
              title,
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
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              publisherEN,
              publisherAR,
              categoryEN,
              categoryAR,
              date,
              year,
              month,
              day,
              filename,
              fileType,
              parentPath,
              fullPath,
              title: value,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
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
