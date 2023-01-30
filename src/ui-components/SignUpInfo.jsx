/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SignUpInfo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="231px"
      height="138px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SignUpInfo")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="231px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="73.91%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Email")}
      >
        <View
          width="231px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="38.89%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "emailField")}
        ></View>
        <Text
          fontFamily="Lato"
          fontSize="10px"
          fontWeight="700"
          color="rgba(165,117,72,1)"
          lineHeight="12px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="66.67%"
          left="3.46%"
          right="83.98%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email*"
          {...getOverrideProps(overrides, "email")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="231px"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="36.96%"
        bottom="34.78%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Password")}
      >
        <View
          width="231px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="43.59%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "passwordField")}
        ></View>
        <Text
          fontFamily="Lato"
          fontSize="10px"
          fontWeight="700"
          color="rgba(165,117,72,1)"
          lineHeight="12px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="38.46%"
          left="3.46%"
          right="75.76%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Password*&#xA;"
          {...getOverrideProps(overrides, "password")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="231px"
        height="37px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="73.19%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Username")}
      >
        <View
          width="231px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="40.54%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,1)"
          {...getOverrideProps(overrides, "usernameField")}
        ></View>
        <Text
          fontFamily="Lato"
          fontSize="10px"
          fontWeight="700"
          color="rgba(165,117,72,1)"
          lineHeight="12px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="-2.7%"
          bottom="32.43%"
          left="3.03%"
          right="74.46%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Username*&#xA;"
          {...getOverrideProps(overrides, "username")}
        ></Text>
      </View>
    </View>
  );
}
