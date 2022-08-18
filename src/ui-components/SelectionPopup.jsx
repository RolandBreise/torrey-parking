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
  Divider,
  Flex,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function SelectionPopup(props) {
  const {
    date,
    firstName,
    lastName,
    studentEmail,
    studentID,
    PointCounter,
    ButtonLabel,
    ErrorMsg,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="22px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="19px 0px 19px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SelectionPopup")}
    >
      <Flex
        gap="24px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 11")}
      >
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="300px"
          justifyContent="center"
          shrink="0"
          height="72px"
          position="relative"
          padding="0px 0px 0px 0px"
          label="First Name"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={firstName}
          {...getOverrideProps(overrides, "FirstName")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="300px"
          justifyContent="center"
          shrink="0"
          height="72px"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Last Name"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={lastName}
          {...getOverrideProps(overrides, "LastName")}
        ></TextField>
      </Flex>
      <Flex
        gap="12px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 12")}
      >
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="300px"
          justifyContent="center"
          shrink="0"
          height="72px"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Student Email"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={studentEmail}
          {...getOverrideProps(overrides, "StudentEmail")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="300px"
          height="73px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Student ID"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={studentID}
          {...getOverrideProps(overrides, "StudentID")}
        ></TextField>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(254,33,33,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="274px"
        height="25px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ErrorMsg}
        {...getOverrideProps(overrides, "ErrorMsg")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(220,222,224,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Save"
        {...getOverrideProps(overrides, "SaveButton")}
      ></Button>
      <Divider
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider33302561")}
      ></Divider>
      <Flex
        gap="10px"
        direction="column"
        height="36px"
        alignItems="stretch"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 15px 0px 15px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 13")}
      >
        <Badge
          display="flex"
          gap="10px"
          width="fit-content"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="32px"
          padding="8px 12px 8px 12px"
          backgroundColor="rgba(229,229,229,1)"
          fontFamily="Inter"
          fontWeight="400"
          fontSize="14px"
          color="rgba(13,26,38,1)"
          textAlign="left"
          lineHeight="14px"
          direction="column"
          size="default"
          variation="default"
          children={PointCounter}
          {...getOverrideProps(overrides, "PointCounter")}
        ></Badge>
      </Flex>
      <Flex
        gap="22px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="7px 8px 7px 8px"
        {...getOverrideProps(overrides, "Frame 14")}
      >
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="302px"
          shrink="0"
          height="40px"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Date"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          type="date"
          value={date}
          {...getOverrideProps(overrides, "Date")}
        ></TextField>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(220,222,224,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children={ButtonLabel}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
      <Divider
        height="1px"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider33302569")}
      ></Divider>
      <Flex
        gap="298px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 15")}
      >
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(220,222,224,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Exit"
          {...getOverrideProps(overrides, "CancelButton")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(245,188,188,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(255,152,152,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Delete Student"
          {...getOverrideProps(overrides, "DeleteButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
