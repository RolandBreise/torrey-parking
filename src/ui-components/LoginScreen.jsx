/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function LoginScreen(props) {
  const { email, ID, failMsg, overrides, ...rest } = props;
  return (
    <Flex
      gap="42px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="22px 0px 22px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "LoginScreen")}
    >
      <Flex
        gap="10px"
        direction="column"
        width="241px"
        height="69px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 0px 10px"
        {...getOverrideProps(overrides, "Frame 3")}
      >
        <Badge
          display="flex"
          gap="10px"
          width="240px"
          height="100px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
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
      </Flex>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="300px"
        justifyContent="center"
        shrink="0"
        position="relative"
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
        direction="column"
        width="300px"
        justifyContent="center"
        shrink="0"
        position="relative"
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
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={failMsg}
        {...getOverrideProps(overrides, "LoginFailMsg")}
      ></Text>
      <Flex
        gap="137px"
        width="313px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="23px 10px 23px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 8")}
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
          backgroundColor="rgba(149,4,4,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Cancel"
          {...getOverrideProps(overrides, "Cancel")}
        ></Button>
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
          children="Next"
          {...getOverrideProps(overrides, "LoginButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
