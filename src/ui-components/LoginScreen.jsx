/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Heading, Text, TextField, View } from "@aws-amplify/ui-react";
export default function LoginScreen(props) {
  const { email, ID, failMsg, overrides, ...rest } = props;
  return (
    <View
      width="320px"
      height="568px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "LoginScreen")}
    >
      <View
        width="235px"
        height="114px"
        position="absolute"
        top="63px"
        left="43px"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(87,205,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="90px"
        left="98px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding="0px 0px 0px 0px"
        level="1"
        children="Login"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="233px"
        left="10px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Student Email"
        placeholder="first.last@ljcds.org..."
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={email}
        {...getOverrideProps(overrides, "StudentEmail")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="342px"
        left="10px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Student ID"
        placeholder="47892465..."
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={ID}
        {...getOverrideProps(overrides, "StudentID")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="486px"
        left="222px"
        direction="row"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.30000001192092896)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Next"
        {...getOverrideProps(overrides, "LoginButton")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,0,0,1)"
        textTransform="capitalize"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="272px"
        height="27px"
        position="absolute"
        top="422px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={failMsg}
        {...getOverrideProps(overrides, "LoginFailMsg")}
      ></Text>
    </View>
  );
}
