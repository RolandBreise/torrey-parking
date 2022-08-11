/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Heading, Image } from "@aws-amplify/ui-react";
export default function CommingSoon(props) {
  const { LogoUrl, overrides, ...rest } = props;
  return (
    <Flex
      gap="30px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="126px 61px 126px 61px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CommingSoon")}
    >
      <Image
        width="313px"
        height="91px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={LogoUrl}
        {...getOverrideProps(overrides, "Logo")}
      ></Image>
      <Badge
        display="flex"
        gap="10px"
        width="143px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(0,34,102,1)"
        color="rgba(239,240,240,1)"
        fontFamily="Inter"
        fontWeight="400"
        fontSize="14px"
        textAlign="left"
        lineHeight="14px"
        direction="column"
        size="default"
        variation="default"
        children="Torrey Parking"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
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
        children="Coming &#xA;Soon"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
    </Flex>
  );
}
