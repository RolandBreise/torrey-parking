/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Flex,
  Heading,
  Image,
  View,
} from "@aws-amplify/ui-react";
export default function HomeScreen(props) {
  const { LogoURL, Date, SpotCounter, overrides, ...rest } = props;
  return (
    <Flex
      gap="93px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="63px 0px 63px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HomeScreen")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="321px"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 0px 10px"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <Image
          width="301px"
          height="83px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src={LogoURL}
          {...getOverrideProps(overrides, "Logo")}
        ></Image>
        <View
          width="100px"
          height="34px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 7")}
        ></View>
        <Heading
          display="flex"
          gap="0"
          width="256px"
          height="83px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          level="1"
          children={Date}
          {...getOverrideProps(overrides, "Date")}
        ></Heading>
        <Badge
          display="flex"
          gap="10px"
          width="208px"
          height="66px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="32px"
          padding="8px 12px 8px 12px"
          backgroundColor="rgba(239,240,240,1)"
          size="default"
          variation="default"
          children={SpotCounter}
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
      </Flex>
      <Flex
        gap="10px"
        width="321px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="14px 16px 14px 18px"
        {...getOverrideProps(overrides, "Frame 6")}
      >
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="40px"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.30000001192092896)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Login"
          {...getOverrideProps(overrides, "LoginButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
