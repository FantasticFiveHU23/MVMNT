/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
} from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Usercansignintotheiraccount(props) {
  const { overrides, ...rest } = props;
  const loginButtonShapeOnClick = useAuthSignOutAction({ global: false });
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
      {...getOverrideProps(overrides, "Usercansignintotheiraccount")}
      {...rest}
    >
      <View
        width="288px"
        height="226px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="95px"
        left="183px"
        border="1px SOLID rgba(0,0,0,0.65)"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(251,246,243,0.5)"
        {...getOverrideProps(overrides, "signUpShape")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="70.83px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="354px"
        left="292px"
        {...getOverrideProps(overrides, "LogInButton")}
      >
        <View
          width="70.83px"
          height="29px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(82,150,165,1)"
          onClick={() => {
            loginButtonShapeOnClick();
          }}
          {...getOverrideProps(overrides, "loginButtonShape")}
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
          width="48px"
          height="17px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="6px"
          left="14px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Register"
          {...getOverrideProps(overrides, "loginText")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="110px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="283px"
        left="269px"
        {...getOverrideProps(overrides, "SSO Icons")}
      >
        <Image
          width="22px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2px"
          left="88px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "facebook")}
        ></Image>
        <Image
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="43px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "apple")}
        ></Image>
        <Image
          width="22px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "google")}
        ></Image>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="216px"
        height="12px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="255px"
        left="217px"
        {...getOverrideProps(overrides, "OrBanner")}
      >
        <Icon
          width="97px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 97, height: 1 }}
          paths={[
            {
              d: "M0 0L97 0L97 -0.35L0 -0.35L0 0Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8px"
          left="119px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "dividerRight")}
        ></Icon>
        <Text
          fontFamily="Lato"
          fontSize="10px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          fontStyle="italic"
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
          top="0px"
          left="103px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="or"
          {...getOverrideProps(overrides, "orText")}
        ></Text>
        <Icon
          width="97px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 97, height: 1 }}
          paths={[
            {
              d: "M0 0L97 0L97 -0.35L0 -0.35L0 0Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8px"
          left="0px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "dividerLeft")}
        ></Icon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="231px"
        height="90px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="136px"
        left="217px"
        {...getOverrideProps(overrides, "LoginInfo")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="231px"
          height="39px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="51px"
          left="0px"
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
            top="17px"
            left="0px"
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
            top="0px"
            left="8px"
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
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "UsernameEmail")}
        >
          <View
            width="231px"
            height="22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="15px"
            left="0px"
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
            top="-1px"
            left="7px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Username/Email*&#xA;"
            {...getOverrideProps(overrides, "username")}
          ></Text>
        </View>
      </View>
      <Text
        fontFamily="Lato"
        fontSize="11px"
        fontWeight="600"
        color="rgba(82,150,165,1)"
        fontStyle="italic"
        lineHeight="13.200000762939453px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="77px"
        left="383px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Need an account?"
        {...getOverrideProps(overrides, "UserNeedsAccount")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="640px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Header2")}
      >
        <Image
          width="50px"
          height="46px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
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
          top="0px"
          left="50px"
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
          top="19px"
          left="117px"
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
            top="0px"
            left="0px"
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
            top="0px"
            left="159px"
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
            top="0px"
            left="236px"
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
            top="0px"
            left="79px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Top Sellers"
            {...getOverrideProps(overrides, "topSellers")}
          ></Text>
        </View>
      </View>
    </View>
  );
}
