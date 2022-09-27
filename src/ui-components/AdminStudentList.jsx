/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function AdminStudentList(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1026px"
      height="126px"
      position="relative"
      padding="21px 18px 21px 14px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AdminStudentList")}
    >
      <Flex
        gap="541px"
        height="84px"
        justifyContent="center"
        alignItems="center"
        grow="1"
        basis="84px"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="19px 57px 19px 57px"
        {...getOverrideProps(overrides, "Frame 10")}
      >
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(220,222,224,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Reload Student"
          {...getOverrideProps(overrides, "ReloadButton")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(220,222,224,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Add Student"
          {...getOverrideProps(overrides, "AddStudentButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
