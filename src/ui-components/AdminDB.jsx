/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function AdminDB(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="420px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="43px 150px 43px 150px"
      {...rest}
      {...getOverrideProps(overrides, "AdminDB")}
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
        children="Load CSV DATA"
        {...getOverrideProps(overrides, "LoadCSV")}
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
        children="Delete All DATA"
        {...getOverrideProps(overrides, "ClearAll")}
      ></Button>
    </Flex>
  );
}
