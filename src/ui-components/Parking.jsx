/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Button, TextField, View } from "@aws-amplify/ui-react";
export default function Parking(props) {
  const { PointsTracker, ButtonLabel, date, overrides, ...rest } = props;
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
        top="278px"
        left="86px"
        width="168px"
        height="162px"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="136px"
        size="large"
        isDisabled={false}
        variation="primary"
        children={ButtonLabel}
        {...getOverrideProps(overrides, "GiveUpParking")}
      ></Button>
      <Badge
        display="flex"
        gap="10px"
        position="absolute"
        top="20px"
        left="208px"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(239,240,240,1)"
        size="default"
        variation="default"
        children={PointsTracker}
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="505px"
        left="32px"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.30000001192092896)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Logout"
        {...getOverrideProps(overrides, "LogoutButton")}
      ></Button>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="155px"
        left="10px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        type="date"
        value={date}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
    </View>
  );
}
