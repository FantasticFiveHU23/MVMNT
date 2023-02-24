/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Homepageloggedin(props) {
  const { overrides, ...rest } = props;
  const searchOnClick = useNavigateAction({ type: "url", url: "" });
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
      {...getOverrideProps(overrides, "Homepageloggedin")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="393px"
        height="22px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="63px"
        left="106px"
        {...getOverrideProps(overrides, "SearchBar")}
      >
        <View
          width="393px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(251,246,243,1)"
          borderRadius="14px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,0.5)"
          {...getOverrideProps(overrides, "searchBar382146")}
        ></View>
        <Image
          width="11px"
          height="11px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="5px"
          left="12px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "searchIcon")}
        ></Image>
        <Icon
          width="22px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 1, height: 22 }}
          paths={[
            {
              d: "M0 0L22 0L22 -2L0 -2L0 0Z",
              stroke: "rgba(251,246,243,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="328px"
          transformOrigin="top left"
          transform="rotate(90deg)"
          {...getOverrideProps(overrides, "searchBar382148")}
        ></Icon>
        <Text
          fontFamily="Lato"
          fontSize="10px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="12px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="28px"
          height="12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="5px"
          left="348px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Filter"
          {...getOverrideProps(overrides, "filterText")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="215px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="108px"
        left="201px"
        {...getOverrideProps(overrides, "Featured")}
      >
        <Icon
          width="215px"
          height="24px"
          viewBox={{ minX: 0, minY: 0, width: 215, height: 24 }}
          paths={[
            {
              d: "M215 12C215 18.6274 166.871 24 107.5 24C48.1294 24 0 18.6274 0 12C0 5.37258 48.1294 0 107.5 0C166.871 0 215 5.37258 215 12Z",
              fill: "rgba(246,194,139,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "featuredEllipse")}
        ></Icon>
        <Text
          fontFamily="Lato"
          fontSize="12px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
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
          top="3px"
          left="85px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Featured&#xA;"
          {...getOverrideProps(overrides, "featuredTitle")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="139px"
        height="257px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="159px"
        left="416px"
        {...getOverrideProps(overrides, "BusinessField3")}
      >
        <Icon
          width="139px"
          height="257px"
          viewBox={{ minX: 0, minY: 0, width: 139, height: 257 }}
          paths={[
            {
              d: "M15 1L124 1L124 -1L15 -1L15 1ZM138 15L138 242L140 242L140 15L138 15ZM124 256L15 256L15 258L124 258L124 256ZM1 242L1 15L-1 15L-1 242L1 242ZM15 256C7.26801 256 1 249.732 1 242L-1 242C-1 250.837 6.16344 258 15 258L15 256ZM138 242C138 249.732 131.732 256 124 256L124 258C132.837 258 140 250.837 140 242L138 242ZM124 1C131.732 1 138 7.26801 138 15L140 15C140 6.16344 132.837 -1 124 -1L124 1ZM15 -1C6.16344 -1 -1 6.16344 -1 15L1 15C1 7.26801 7.26801 1 15 1L15 -1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 15C0 6.71573 6.71573 0 15 0L124 0C132.284 0 139 6.71573 139 15L139 242C139 250.284 132.284 257 124 257L15 257C6.71573 257 0 250.284 0 242L0 15Z",
              fill: "rgba(251,246,243,0.85)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "productBackground382154")}
        ></Icon>
        <Icon
          width="106px"
          height="103px"
          viewBox={{ minX: 0, minY: 0, width: 106, height: 103 }}
          paths={[
            {
              d: "M20 1L86 1L86 -1L20 -1L20 1ZM105 20L105 83L107 83L107 20L105 20ZM86 102L20 102L20 104L86 104L86 102ZM1 83L1 20L-1 20L-1 83L1 83ZM20 102C9.50659 102 1 93.4934 1 83L-1 83C-1 94.598 8.40202 104 20 104L20 102ZM105 83C105 93.4934 96.4934 102 86 102L86 104C97.598 104 107 94.598 107 83L105 83ZM86 1C96.4934 1 105 9.50659 105 20L107 20C107 8.40202 97.598 -1 86 -1L86 1ZM20 -1C8.40202 -1 -1 8.40202 -1 20L1 20C1 9.50659 9.50659 1 20 1L20 -1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 20C0 8.95431 8.95431 0 20 0L86 0C97.0457 0 106 8.9543 106 20L106 83C106 94.0457 97.0457 103 86 103L20 103C8.9543 103 0 94.0457 0 83L0 20Z",
              fill: "rgba(246,194,139,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="134px"
          left="16px"
          {...getOverrideProps(overrides, "productImage382155")}
        ></Icon>
        <Text
          fontFamily="Lato"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          top="112px"
          left="37px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Business #3"
          {...getOverrideProps(overrides, "businessTitleText382156")}
        ></Text>
        <View
          width="106px"
          height="103px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="9px"
          left="16px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(246,194,139,1)"
          {...getOverrideProps(overrides, "businessImage382157")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="139px"
        height="257px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="161px"
        left="254px"
        {...getOverrideProps(overrides, "BusinessField2")}
      >
        <Icon
          width="139px"
          height="257px"
          viewBox={{ minX: 0, minY: 0, width: 139, height: 257 }}
          paths={[
            {
              d: "M15 1L124 1L124 -1L15 -1L15 1ZM138 15L138 242L140 242L140 15L138 15ZM124 256L15 256L15 258L124 258L124 256ZM1 242L1 15L-1 15L-1 242L1 242ZM15 256C7.26801 256 1 249.732 1 242L-1 242C-1 250.837 6.16344 258 15 258L15 256ZM138 242C138 249.732 131.732 256 124 256L124 258C132.837 258 140 250.837 140 242L138 242ZM124 1C131.732 1 138 7.26801 138 15L140 15C140 6.16344 132.837 -1 124 -1L124 1ZM15 -1C6.16344 -1 -1 6.16344 -1 15L1 15C1 7.26801 7.26801 1 15 1L15 -1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 15C0 6.71573 6.71573 0 15 0L124 0C132.284 0 139 6.71573 139 15L139 242C139 250.284 132.284 257 124 257L15 257C6.71573 257 0 250.284 0 242L0 15Z",
              fill: "rgba(251,246,243,0.85)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "productBackground382159")}
        ></Icon>
        <Icon
          width="106px"
          height="103px"
          viewBox={{ minX: 0, minY: 0, width: 106, height: 103 }}
          paths={[
            {
              d: "M20 1L86 1L86 -1L20 -1L20 1ZM105 20L105 83L107 83L107 20L105 20ZM86 102L20 102L20 104L86 104L86 102ZM1 83L1 20L-1 20L-1 83L1 83ZM20 102C9.50659 102 1 93.4934 1 83L-1 83C-1 94.598 8.40202 104 20 104L20 102ZM105 83C105 93.4934 96.4934 102 86 102L86 104C97.598 104 107 94.598 107 83L105 83ZM86 1C96.4934 1 105 9.50659 105 20L107 20C107 8.40202 97.598 -1 86 -1L86 1ZM20 -1C8.40202 -1 -1 8.40202 -1 20L1 20C1 9.50659 9.50659 1 20 1L20 -1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 20C0 8.95431 8.95431 0 20 0L86 0C97.0457 0 106 8.9543 106 20L106 83C106 94.0457 97.0457 103 86 103L20 103C8.9543 103 0 94.0457 0 83L0 20Z",
              fill: "rgba(246,194,139,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="134px"
          left="16px"
          {...getOverrideProps(overrides, "productImage382160")}
        ></Icon>
        <Text
          fontFamily="Lato"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          top="112px"
          left="37px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Business #2&#xA;"
          {...getOverrideProps(overrides, "businessTitleText382161")}
        ></Text>
        <View
          width="106px"
          height="103px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="9px"
          left="16px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(246,194,139,1)"
          {...getOverrideProps(overrides, "businessImage382162")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="139px"
        height="257px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="161px"
        left="79px"
        {...getOverrideProps(overrides, "BusinessField1")}
      >
        <Icon
          width="139px"
          height="257px"
          viewBox={{ minX: 0, minY: 0, width: 139, height: 257 }}
          paths={[
            {
              d: "M15 1L124 1L124 -1L15 -1L15 1ZM138 15L138 242L140 242L140 15L138 15ZM124 256L15 256L15 258L124 258L124 256ZM1 242L1 15L-1 15L-1 242L1 242ZM15 256C7.26801 256 1 249.732 1 242L-1 242C-1 250.837 6.16344 258 15 258L15 256ZM138 242C138 249.732 131.732 256 124 256L124 258C132.837 258 140 250.837 140 242L138 242ZM124 1C131.732 1 138 7.26801 138 15L140 15C140 6.16344 132.837 -1 124 -1L124 1ZM15 -1C6.16344 -1 -1 6.16344 -1 15L1 15C1 7.26801 7.26801 1 15 1L15 -1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 15C0 6.71573 6.71573 0 15 0L124 0C132.284 0 139 6.71573 139 15L139 242C139 250.284 132.284 257 124 257L15 257C6.71573 257 0 250.284 0 242L0 15Z",
              fill: "rgba(251,246,243,0.85)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "productBackground382164")}
        ></Icon>
        <Icon
          width="106px"
          height="103px"
          viewBox={{ minX: 0, minY: 0, width: 106, height: 103 }}
          paths={[
            {
              d: "M20 1L86 1L86 -1L20 -1L20 1ZM105 20L105 83L107 83L107 20L105 20ZM86 102L20 102L20 104L86 104L86 102ZM1 83L1 20L-1 20L-1 83L1 83ZM20 102C9.50659 102 1 93.4934 1 83L-1 83C-1 94.598 8.40202 104 20 104L20 102ZM105 83C105 93.4934 96.4934 102 86 102L86 104C97.598 104 107 94.598 107 83L105 83ZM86 1C96.4934 1 105 9.50659 105 20L107 20C107 8.40202 97.598 -1 86 -1L86 1ZM20 -1C8.40202 -1 -1 8.40202 -1 20L1 20C1 9.50659 9.50659 1 20 1L20 -1Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M0 20C0 8.95431 8.95431 0 20 0L86 0C97.0457 0 106 8.9543 106 20L106 83C106 94.0457 97.0457 103 86 103L20 103C8.9543 103 0 94.0457 0 83L0 20Z",
              fill: "rgba(246,194,139,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="134px"
          left="16px"
          {...getOverrideProps(overrides, "productImage382165")}
        ></Icon>
        <Text
          fontFamily="Lato"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          top="112px"
          left="37px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Business #1&#xA;"
          {...getOverrideProps(overrides, "businessTitleText382166")}
        ></Text>
        <View
          width="106px"
          height="103px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="9px"
          left="16px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(246,194,139,1)"
          {...getOverrideProps(overrides, "businessImage382167")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="7px"
        height="291px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="113px"
        left="572px"
        {...getOverrideProps(overrides, "ScrollBar1")}
      >
        <View
          width="7px"
          height="291px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          bottom="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "scrollField")}
        ></View>
        <View
          width="8.91px"
          height="252.08px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2px"
          left="-1px"
          border="1px SOLID rgba(255,255,255,0.1475)"
          borderRadius="4.5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(82,150,165,0.5025)"
          {...getOverrideProps(overrides, "scrollBar")}
        ></View>
      </View>
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
        {...getOverrideProps(overrides, "Header")}
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
            onClick={() => {
              searchOnClick();
            }}
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
        <Icon
          width="30px"
          height="30px"
          viewBox={{ minX: 0, minY: 0, width: 30, height: 30 }}
          paths={[
            {
              d: "M29.5 15C29.5 23.0081 23.0081 29.5 15 29.5L15 30.5C23.5604 30.5 30.5 23.5604 30.5 15L29.5 15ZM15 29.5C6.99187 29.5 0.5 23.0081 0.5 15L-0.5 15C-0.5 23.5604 6.43959 30.5 15 30.5L15 29.5ZM0.5 15C0.5 6.99187 6.99187 0.5 15 0.5L15 -0.5C6.43959 -0.5 -0.5 6.43959 -0.5 15L0.5 15ZM15 0.5C23.0081 0.5 29.5 6.99187 29.5 15L30.5 15C30.5 6.43959 23.5604 -0.5 15 -0.5L15 0.5Z",
              stroke: "rgba(251,246,243,1)",
              fillRule: "nonzero",
              strokeWidth: 0,
            },
            {
              d: "M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",
              fill: "rgba(130,221,240,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8px"
          left="591px"
          {...getOverrideProps(overrides, "ProfileImage")}
        ></Icon>
      </View>
      <Flex
        gap="10px"
        direction="row"
        width="162px"
        height="22px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="56px"
        left="478px"
        border="1px SOLID rgba(251,246,243,1)"
        borderRadius="3px"
        padding="6px 15px 6px 15px"
        backgroundColor="rgba(246,194,139,0.75)"
        {...getOverrideProps(overrides, "RegSuccessBanner")}
      >
        <Text
          fontFamily="Lato"
          fontSize="10px"
          fontWeight="400"
          color="rgba(251,246,243,1)"
          lineHeight="12px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="143px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Account Registration Successful!&#xA;"
          {...getOverrideProps(overrides, "regSuccessText")}
        ></Text>
      </Flex>
    </View>
  );
}
