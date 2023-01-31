/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import RegisterButton from "./RegisterButton";
import { View } from "@aws-amplify/ui-react";
import UserTypeSelection from "./UserTypeSelection";
import SignUpInfo from "./SignUpInfo";
import Header from "./Header";
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
      <RegisterButton
        width="70.83px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="354px"
        left="294px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "RegisterButton")}
      ></RegisterButton>
      <View
        width="288px"
        height="226px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="22.73%"
        bottom="23.21%"
        left="28.59%"
        right="26.41%"
        border="1px SOLID rgba(0,0,0,0.65)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(251,246,243,0.5)"
        {...getOverrideProps(overrides, "signUpShape")}
      ></View>
      <UserTypeSelection
        width="192px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="272px"
        left="230px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "UserTypeSelection")}
      ></UserTypeSelection>
      <SignUpInfo
        width="231px"
        height="138px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="119px"
        left="213px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SignUpInfo")}
      ></SignUpInfo>
      <View {...getOverrideProps(overrides, "UserHasAccount")}></View>
      <Header
        width="640px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Header1")}
      ></Header>
    </View>
  );
}
