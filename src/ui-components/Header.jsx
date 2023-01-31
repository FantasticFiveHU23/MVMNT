/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="640px"
      height="46px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Image
        width="7.81%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="92.19%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "logo")}
      ></Image>
      <View
        width="590px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="7.81%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(165,117,72,1)"
        {...getOverrideProps(overrides, "headerBanner")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="272px"
        height="14px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="41.3%"
        bottom="28.26%"
        left="18.28%"
        right="39.22%"
        {...getOverrideProps(overrides, "HeaderOptions")}
      >
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
          top="0%"
          bottom="0%"
          left="0%"
          right="79.41%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Local finds"
          {...getOverrideProps(overrides, "localFinds")}
        ></Text>
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
          top="0%"
          bottom="0%"
          left="58.46%"
          right="20.59%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Categories"
          {...getOverrideProps(overrides, "categories")}
        ></Text>
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
          top="0%"
          bottom="0%"
          left="86.76%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search"
          {...getOverrideProps(overrides, "search")}
        ></Text>
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
          top="0%"
          bottom="0%"
          left="29.04%"
          right="50%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Top Sellers"
          {...getOverrideProps(overrides, "topSellers")}
        ></Text>
      </View>
    </View>
  );
}
