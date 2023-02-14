/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Usercancreateanaccount(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="640px"
      height="418px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(252,215,173,1)"
      {...getOverrideProps(overrides, "Usercancreateanaccount")}
      {...rest}
    >
      <View {...getOverrideProps(overrides, "RegisterButton")}></View>
      <View {...getOverrideProps(overrides, "UserTypeSelection")}></View>
      <View {...getOverrideProps(overrides, "SignUpInfo")}></View>
      <View {...getOverrideProps(overrides, "UserHasAccount")}></View>
      <View {...getOverrideProps(overrides, "signUpShape")}></View>
      <View {...getOverrideProps(overrides, "Header1")}></View>
    </View>
  );
}
