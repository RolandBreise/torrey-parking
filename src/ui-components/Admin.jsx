/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading } from "@aws-amplify/ui-react";
export default function Admin(props) {
  const { LargeTextContents, overrides, ...rest } = props;
  return (
    <Flex
      gap="5px"
      direction="column"
      width="1600px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="5px 5px 5px 5px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Admin")}
    >
      <Heading
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        level="1"
        children="Torrey Parking Database Admin Screen"
        {...getOverrideProps(overrides, "Heading32482464")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        level="1"
        children="WARNING: All actions on this screen effect the entire database and cannot be undone"
        {...getOverrideProps(overrides, "Heading32482468")}
      ></Heading>
      <Flex
        gap="420px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="43px 150px 43px 150px"
        {...getOverrideProps(overrides, "Frame 1")}
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
          children="Logout"
          {...getOverrideProps(overrides, "Logout")}
        ></Button>
      </Flex>
    </Flex>
  );
}
