/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function Loadview(props) {
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
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Loadview")}
      {...rest}
    >
      <View
        width="640px"
        height="418px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(252,215,173,1)"
        {...getOverrideProps(overrides, "Loading Screen ")}
      >
        <Image
          width="256px"
          height="256px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="87px"
          left="200px"
          border="3px SOLID rgba(252,215,173,1)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="48px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "logo")}
        ></Image>
      </View>
    </View>
  );
}
