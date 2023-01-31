/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Group1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="61px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Group1")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="61px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <View
          width="61px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(251,246,243,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(82,150,165,1)"
          {...getOverrideProps(overrides, "Rectangle 37")}
        ></View>
        <Text
          fontFamily="Lato"
          fontSize="12px"
          fontWeight="400"
          color="rgba(251,246,243,1)"
          lineHeight="14.40000057220459px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="20.83%"
          bottom="20.83%"
          left="24.59%"
          right="22.95%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Log In"
          {...getOverrideProps(overrides, "Log In")}
        ></Text>
      </View>
    </View>
  );
}
