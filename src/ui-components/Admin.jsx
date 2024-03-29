/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, Text } from "@aws-amplify/ui-react";
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
        children="Torrey Parking Admin Screen"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(172,52,52,1)"
        lineHeight="25px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="861px"
        height="48px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="WARNING: EVERYTHING ON THIS SCREEN WILL DIRECTLY EFFECT THE DATABASE AND ARE IRRIVERSABLE."
        {...getOverrideProps(
          overrides,
          "WARNING: EVERYTHING ON THIS SCREEN WILL DIRECTLY EFFECT THE DATABASE AND ARE IRRIVERSABLE."
        )}
      ></Text>
      <Flex
        gap="10px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="9px 48px 9px 48px"
        {...getOverrideProps(overrides, "Frame 9")}
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
          children="Logout"
          {...getOverrideProps(overrides, "Logout")}
        ></Button>
      </Flex>
    </Flex>
  );
}
