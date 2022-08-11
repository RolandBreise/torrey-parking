/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Button, Flex, Heading, View } from "@aws-amplify/ui-react";
export default function NoParking(props) {
  const { HeaderText, Spots, overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="568px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NoParking")}
    >
      <Flex
        gap="10px"
        position="absolute"
        top="calc(50% - 46.5px - 234.5px)"
        left="calc(50% - 135px - 5px)"
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 2")}
      >
        <Badge
          display="flex"
          gap="10px"
          width="250px"
          height="73px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="17px"
          padding="8px 12px 8px 12px"
          backgroundColor="rgba(102,199,255,1)"
          fontSize="20px"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          fontFamily="Inter"
          fontWeight="400"
          textAlign="left"
          direction="column"
          size="default"
          variation="default"
          children={HeaderText}
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
      </Flex>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="96px"
        left="35px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        level="1"
        children={Spots}
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="501px"
        left="209px"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.30000001192092896)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Logout"
        {...getOverrideProps(overrides, "LogoutButton")}
      ></Button>
    </View>
  );
}
