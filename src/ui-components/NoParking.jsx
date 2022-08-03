/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Heading, Text, View } from "@aws-amplify/ui-react";
export default function NoParking(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="568px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NoParking")}
    >
      <View
        width="204px"
        height="44px"
        position="absolute"
        top="10px"
        left="58px"
        borderRadius="19px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(104,228,255,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="5px"
        left="71px"
        direction="row"
        width="177px"
        height="54px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        level="1"
        children="Gym Lot"
        {...getOverrideProps(overrides, "Heading31662853")}
      ></Heading>
      <View
        width="204px"
        height="44px"
        position="absolute"
        top="262px"
        left="58px"
        borderRadius="19px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(104,228,255,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="257px"
        left="71px"
        direction="row"
        width="177px"
        height="54px"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        level="1"
        children="Main Lot"
        {...getOverrideProps(overrides, "Heading31662874")}
      ></Heading>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="15px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="188px"
        height="164px"
        position="absolute"
        top="66px"
        left="54px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="A1, A2, A3"
        {...getOverrideProps(overrides, "GymLotParking")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="15px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="188px"
        height="164px"
        position="absolute"
        top="323px"
        left="54px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="A1, A2, A3"
        {...getOverrideProps(overrides, "MainLotParking")}
      ></Text>
    </View>
  );
}
