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
  Heading,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
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
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="118px"
        left="98px"
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
        top="232px"
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
        top="320px"
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
        top="408px"
        left="24px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={failMsg}
        {...getOverrideProps(overrides, "LoginFailMsg")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="501px"
        left="225px"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.30000001192092896)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Next"
        {...getOverrideProps(overrides, "LoginButton")}
      ></Button>
      <Badge
        display="flex"
        gap="10px"
        position="absolute"
        top="43px"
        left="40px"
        width="240px"
        height="122px"
        justifyContent="flex-start"
        alignItems="center"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(102,199,255,1)"
        fontSize="48px"
        color="rgba(255,255,255,1)"
        lineHeight="72px"
        fontFamily="Inter"
        fontWeight="400"
        textAlign="left"
        direction="column"
        size="default"
        variation="default"
        children="Login"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
    </View>
  );
}
