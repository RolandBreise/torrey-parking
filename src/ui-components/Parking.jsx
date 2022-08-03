/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Button, View } from "@aws-amplify/ui-react";
export default function Parking(props) {
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
      {...getOverrideProps(overrides, "Parking")}
    >
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="195px"
        left="67px"
        direction="row"
        width="186px"
        height="179px"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="136px"
        size="large"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "GiveUpParking")}
      ></Button>
      <Badge
        display="flex"
        gap="10px"
        position="absolute"
        top="20px"
        left="208px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(239,240,240,1)"
        size="default"
        variation="default"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="517px"
        left="13px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        size="small"
        isDisabled={false}
        variation="default"
        children="Logout"
        {...getOverrideProps(overrides, "Logout")}
      ></Button>
    </View>
  );
}
