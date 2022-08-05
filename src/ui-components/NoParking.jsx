/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Button, Heading, Text, View } from "@aws-amplify/ui-react";
export default function NoParking(props) {
  const { GymSpots, MainSpots, overrides, ...rest } = props;
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
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="49px"
        left="67.5px"
        width="177px"
        height="54px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        level="1"
        children="Gym Lot"
        {...getOverrideProps(overrides, "Heading31662853")}
      ></Heading>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="311px"
        left="67.5px"
        width="177px"
        height="54px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        level="1"
        children="Main Lot"
        {...getOverrideProps(overrides, "Heading31662874")}
      ></Heading>
      <Badge
        display="flex"
        gap="10px"
        position="absolute"
        top="15px"
        left="35px"
        width="250px"
        height="73px"
        justifyContent="flex-start"
        alignItems="center"
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
        children="Gym Parking"
        {...getOverrideProps(overrides, "Badge31872450")}
      ></Badge>
      <Badge
        display="flex"
        gap="10px"
        position="absolute"
        top="292px"
        left="35px"
        width="250px"
        height="73px"
        justifyContent="flex-start"
        alignItems="center"
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
        children="Main Parking"
        {...getOverrideProps(overrides, "Badge31872454")}
      ></Badge>
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
        children={GymSpots}
        {...getOverrideProps(overrides, "Heading31872456")}
      ></Heading>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="65.67%"
        bottom="30.11%"
        left="12.81%"
        right="55%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={MainSpots}
        {...getOverrideProps(overrides, "label")}
      ></Text>
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
