/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function AnalyticsView(props) {
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
      {...getOverrideProps(overrides, "AnalyticsView")}
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
        {...getOverrideProps(overrides, "Business Page Analytics ")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="396px"
          height="79px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="276px"
          left="182px"
          {...getOverrideProps(overrides, "PurchaseRates")}
        >
          <View
            width="396px"
            height="79px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(246,194,139,1)"
            {...getOverrideProps(overrides, "purchaseCountShape")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(251,246,243,1)"
            fontStyle="italic"
            lineHeight="24.204544067382812px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="53px"
            height="4px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="32px"
            left="180px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="39"
            {...getOverrideProps(overrides, "purchaseCount")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="600"
            color="rgba(251,246,243,1)"
            lineHeight="14.522727012634277px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="89px"
            height="0px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="7px"
            left="153px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="# Of Purchases"
            {...getOverrideProps(overrides, "purchaseNumber")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="101px"
          height="71px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="264px"
          left="43px"
          {...getOverrideProps(overrides, "Item5")}
        >
          <Icon
            width="101px"
            height="71px"
            viewBox={{ minX: 0, minY: 0, width: 101, height: 71 }}
            paths={[
              {
                d: "M0 9C0 4.02944 4.02944 0 9 0L92 0C96.9706 0 101 4.02944 101 9L101 62C101 66.9706 96.9706 71 92 71L9 71C4.02943 71 0 66.9706 0 62L0 9Z",
                fill: "rgba(251,246,243,1)",
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
            {...getOverrideProps(overrides, "productShape")}
          ></Icon>
          <View
            padding="0px 0px 0px 0px"
            width="64.93px"
            height="5.4px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="59.42px"
            left="17.31px"
            {...getOverrideProps(overrides, "Ratings")}
          >
            <Icon
              width="8.66px"
              height="5.4px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.6572265625,
                height: 5.40216064453125,
              }}
              paths={[
                {
                  d: "M4.32857 0L6.82488 -1.66386L4.32857 -5.4091L1.83226 -1.66386L4.32857 0ZM5.47349 1.71774L2.97718 3.3816L3.81496 4.63852L5.3236 4.71399L5.47349 1.71774ZM8.44529 1.86641L9.85952 4.51214L19.403 -0.589166L8.59518 -1.12985L8.44529 1.86641ZM6.18109 3.07669L4.76686 0.430955L2.43457 1.67764L3.37885 4.14788L6.18109 3.07669ZM6.87284 4.88631L5.80439 7.6896L12.0689 10.0773L9.67508 3.81512L6.87284 4.88631ZM4.32857 3.91658L5.39703 1.11329L4.32857 0.706055L3.26011 1.11329L4.32857 3.91658ZM1.7843 4.88631L-1.01794 3.81512L-3.41172 10.0773L2.85276 7.6896L1.7843 4.88631ZM2.47605 3.07669L5.27829 4.14788L6.22257 1.67764L3.89029 0.430955L2.47605 3.07669ZM0.211855 1.86641L0.0619622 -1.12985L-10.7459 -0.589166L-1.20238 4.51214L0.211855 1.86641ZM3.18365 1.71774L3.33354 4.71399L4.84219 4.63852L5.67996 3.3816L3.18365 1.71774ZM1.83226 1.66386L2.97718 3.3816L7.9698 0.0538718L6.82488 -1.66386L1.83226 1.66386ZM5.3236 4.71399L8.29539 4.86266L8.59518 -1.12985L5.62339 -1.27852L5.3236 4.71399ZM7.03105 -0.779333L4.76686 0.430955L7.59533 5.72243L9.85952 4.51214L7.03105 -0.779333ZM3.37885 4.14788L4.0706 5.9575L9.67508 3.81512L8.98333 2.0055L3.37885 4.14788ZM7.9413 2.08303L5.39703 1.11329L3.26011 6.71986L5.80439 7.6896L7.9413 2.08303ZM3.26011 1.11329L0.715843 2.08303L2.85276 7.6896L5.39703 6.71986L3.26011 1.11329ZM4.58654 5.9575L5.27829 4.14788L-0.326191 2.0055L-1.01794 3.81512L4.58654 5.9575ZM3.89029 0.430955L1.62609 -0.779333L-1.20238 4.51214L1.06181 5.72243L3.89029 0.430955ZM0.361749 4.86266L3.33354 4.71399L3.03376 -1.27852L0.0619622 -1.12985L0.361749 4.86266ZM5.67996 3.3816L6.82488 1.66386L1.83226 -1.66386L0.687341 0.0538718L5.67996 3.3816Z",
                  stroke: "rgba(241,198,68,1)",
                  fillRule: "nonzero",
                  strokeWidth: 3,
                },
                {
                  d: "M4.32857 0L5.47349 1.71774L8.44529 1.86641L6.18109 3.07669L6.87284 4.88631L4.32857 3.91658L1.7843 4.88631L2.47605 3.07669L0.211855 1.86641L3.18365 1.71774L4.32857 0Z",
                  fill: "rgba(241,198,68,1)",
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
              {...getOverrideProps(overrides, "star382833")}
            ></Icon>
            <Icon
              width="10.82px"
              height="5.4px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.821533203125,
                height: 5.40216064453125,
              }}
              paths={[
                {
                  d: "M5.41071 0L7.71557 -1.92032L5.41071 -4.68672L3.10586 -1.92032L5.41071 0ZM6.84187 1.71774L4.53701 3.63806L5.39015 4.66204L6.7219 4.71534L6.84187 1.71774ZM10.5566 1.86641L11.7362 4.62478L10.6766 -1.1312L10.5566 1.86641ZM7.72637 3.07669L6.54681 0.318316L3.67106 1.54807L5.01951 4.37011L7.72637 3.07669ZM8.59105 4.88631L7.71608 7.75588L14.2372 9.74428L11.2979 3.5929L8.59105 4.88631ZM5.41071 3.91658L6.28569 1.04701L5.41071 0.780214L4.53574 1.04701L5.41071 3.91658ZM2.23038 4.88631L-0.476483 3.5929L-3.41578 9.74428L3.10535 7.75588L2.23038 4.88631ZM3.09506 3.07669L5.80192 4.37011L7.15037 1.54807L4.27462 0.318316L3.09506 3.07669ZM0.264819 1.86641L0.144851 -1.1312L-0.914738 4.62478L0.264819 1.86641ZM3.97956 1.71774L4.09953 4.71534L5.43128 4.66204L6.28442 3.63806L3.97956 1.71774ZM3.10586 1.92032L4.53701 3.63806L9.14672 -0.202585L7.71557 -1.92032L3.10586 1.92032ZM6.7219 4.71534L10.4366 4.86401L10.6766 -1.1312L6.96184 -1.27986L6.7219 4.71534ZM9.37705 -0.891972L6.54681 0.318316L8.90592 5.83507L11.7362 4.62478L9.37705 -0.891972ZM5.01951 4.37011L5.88419 6.17972L11.2979 3.5929L10.4332 1.78328L5.01951 4.37011ZM9.46603 2.01675L6.28569 1.04701L4.53574 6.78614L7.71608 7.75588L9.46603 2.01675ZM4.53574 1.04701L1.3554 2.01675L3.10535 7.75588L6.28569 6.78614L4.53574 1.04701ZM4.93724 6.17972L5.80192 4.37011L0.388203 1.78328L-0.476483 3.5929L4.93724 6.17972ZM4.27462 0.318316L1.44438 -0.891972L-0.914738 4.62478L1.9155 5.83507L4.27462 0.318316ZM0.384788 4.86401L4.09953 4.71534L3.85959 -1.27986L0.144851 -1.1312L0.384788 4.86401ZM6.28442 3.63806L7.71557 1.92032L3.10586 -1.92032L1.6747 -0.202585L6.28442 3.63806Z",
                  stroke: "rgba(241,198,68,1)",
                  fillRule: "nonzero",
                  strokeWidth: 3,
                },
                {
                  d: "M5.41071 0L6.84187 1.71774L10.5566 1.86641L7.72637 3.07669L8.59105 4.88631L5.41071 3.91658L2.23038 4.88631L3.09506 3.07669L0.264819 1.86641L3.97956 1.71774L5.41071 0Z",
                  fill: "rgba(241,198,68,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="12.99px"
              {...getOverrideProps(overrides, "star382834")}
            ></Icon>
            <Icon
              width="8.66px"
              height="5.4px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.6572265625,
                height: 5.40216064453125,
              }}
              paths={[
                {
                  d: "M4.32857 0L6.82488 -1.66386L4.32857 -5.4091L1.83226 -1.66386L4.32857 0ZM5.47349 1.71774L2.97718 3.3816L3.81496 4.63852L5.3236 4.71399L5.47349 1.71774ZM8.44529 1.86641L9.85952 4.51214L19.403 -0.589166L8.59518 -1.12985L8.44529 1.86641ZM6.18109 3.07669L4.76686 0.430955L2.43457 1.67764L3.37885 4.14788L6.18109 3.07669ZM6.87284 4.88631L5.80439 7.6896L12.0689 10.0773L9.67508 3.81512L6.87284 4.88631ZM4.32857 3.91658L5.39703 1.11329L4.32857 0.706055L3.26011 1.11329L4.32857 3.91658ZM1.7843 4.88631L-1.01794 3.81512L-3.41172 10.0773L2.85276 7.6896L1.7843 4.88631ZM2.47605 3.07669L5.27829 4.14788L6.22257 1.67764L3.89029 0.430955L2.47605 3.07669ZM0.211855 1.86641L0.0619622 -1.12985L-10.7459 -0.589166L-1.20238 4.51214L0.211855 1.86641ZM3.18365 1.71774L3.33354 4.71399L4.84219 4.63852L5.67996 3.3816L3.18365 1.71774ZM1.83226 1.66386L2.97718 3.3816L7.9698 0.0538718L6.82488 -1.66386L1.83226 1.66386ZM5.3236 4.71399L8.29539 4.86266L8.59518 -1.12985L5.62339 -1.27852L5.3236 4.71399ZM7.03105 -0.779333L4.76686 0.430955L7.59533 5.72243L9.85952 4.51214L7.03105 -0.779333ZM3.37885 4.14788L4.0706 5.9575L9.67508 3.81512L8.98333 2.0055L3.37885 4.14788ZM7.9413 2.08303L5.39703 1.11329L3.26011 6.71986L5.80439 7.6896L7.9413 2.08303ZM3.26011 1.11329L0.715843 2.08303L2.85276 7.6896L5.39703 6.71986L3.26011 1.11329ZM4.58654 5.9575L5.27829 4.14788L-0.326191 2.0055L-1.01794 3.81512L4.58654 5.9575ZM3.89029 0.430955L1.62609 -0.779333L-1.20238 4.51214L1.06181 5.72243L3.89029 0.430955ZM0.361749 4.86266L3.33354 4.71399L3.03376 -1.27852L0.0619622 -1.12985L0.361749 4.86266ZM5.67996 3.3816L6.82488 1.66386L1.83226 -1.66386L0.687341 0.0538718L5.67996 3.3816Z",
                  stroke: "rgba(241,198,68,1)",
                  fillRule: "nonzero",
                  strokeWidth: 3,
                },
                {
                  d: "M4.32857 0L5.47349 1.71774L8.44529 1.86641L6.18109 3.07669L6.87284 4.88631L4.32857 3.91658L1.7843 4.88631L2.47605 3.07669L0.211855 1.86641L3.18365 1.71774L4.32857 0Z",
                  fill: "rgba(241,198,68,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="28.14px"
              {...getOverrideProps(overrides, "star382835")}
            ></Icon>
            <Icon
              width="10.82px"
              height="5.4px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 10.821533203125,
                height: 5.40216064453125,
              }}
              paths={[
                {
                  d: "M5.41071 0L6.84187 1.71774L10.5566 1.86641L7.72637 3.07669L8.59105 4.88631L5.41071 3.91658L2.23038 4.88631L3.09506 3.07669L0.264819 1.86641L3.97956 1.71774L5.41071 0Z",
                  fill: "rgba(212,212,212,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="41.12px"
              {...getOverrideProps(overrides, "star382836")}
            ></Icon>
            <Icon
              width="8.66px"
              height="5.4px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 8.6572265625,
                height: 5.40216064453125,
              }}
              paths={[
                {
                  d: "M4.32857 0L5.47349 1.71774L8.44529 1.86641L6.18109 3.07669L6.87284 4.88631L4.32857 3.91658L1.7843 4.88631L2.47605 3.07669L0.211855 1.86641L3.18365 1.71774L4.32857 0Z",
                  fill: "rgba(212,212,212,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="56.27px"
              {...getOverrideProps(overrides, "star382837")}
            ></Icon>
          </View>
          <Text
            fontFamily="Lato"
            fontSize="8px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="9.600000381469727px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="60.6px"
            height="5.4px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="50.93px"
            left="20.2px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Avg Price Range"
            {...getOverrideProps(overrides, "avrgPriceRange")}
          ></Text>
          <Text
            fontFamily="Lato"
            fontSize="8px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="9.600000381469727px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="66.37px"
            height="6.95px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="43.99px"
            left="17.31px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Product Name"
            {...getOverrideProps(overrides, "productName")}
          ></Text>
          <Icon
            width="80.8px"
            height="35.5px"
            viewBox={{ minX: 0, minY: 0, width: 80.800048828125, height: 35.5 }}
            paths={[
              {
                d: "M10 1L70.8 1L70.8 -1L10 -1L10 1ZM79.8 10L79.8 25.5L81.8 25.5L81.8 10L79.8 10ZM70.8 34.5L10 34.5L10 36.5L70.8 36.5L70.8 34.5ZM1 25.5L1 10L-1 10L-1 25.5L1 25.5ZM10 34.5C5.02943 34.5 1 30.4706 1 25.5L-1 25.5C-1 31.5751 3.92486 36.5 10 36.5L10 34.5ZM79.8 25.5C79.8 30.4706 75.7706 34.5 70.8 34.5L70.8 36.5C76.8751 36.5 81.8 31.5751 81.8 25.5L79.8 25.5ZM70.8 1C75.7706 1 79.8 5.02944 79.8 10L81.8 10C81.8 3.92487 76.8751 -1 70.8 -1L70.8 1ZM10 -1C3.92487 -1 -1 3.92487 -1 10L1 10C1 5.02944 5.02944 1 10 1L10 -1Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
              {
                d: "M0 10C0 4.47715 4.47715 0 10 0L70.8 0C76.3229 0 80.8 4.47715 80.8 10L80.8 25.5C80.8 31.0228 76.3229 35.5 70.8 35.5L10 35.5C4.47715 35.5 0 31.0228 0 25.5L0 10Z",
                fill: "rgba(246,194,139,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="5.4px"
            left="10.1px"
            {...getOverrideProps(overrides, "itemPhoto")}
          ></Icon>
        </View>
        <Text
          fontFamily="Lato"
          fontSize="8px"
          fontWeight="600"
          color="rgba(251,246,243,1)"
          lineHeight="9.600000381469727px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="141px"
          height="10px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="249px"
          left="46px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Most Popular Products "
          {...getOverrideProps(overrides, "Most Popular Products")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="518px"
          height="95px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="149px"
          left="65px"
          {...getOverrideProps(overrides, "Line chart")}
        >
          <View
            width="518px"
            height="95px"
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
            {...getOverrideProps(overrides, "chartField")}
          ></View>
        </View>
        <Text
          fontFamily="Lato"
          fontSize="11px"
          fontWeight="600"
          color="rgba(251,246,243,1)"
          lineHeight="13.200000762939453px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="151px"
          height="9px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="165px"
          left="9px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Business &#xA;Page&#xA; Views "
          {...getOverrideProps(overrides, "Business Page Views")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="48px"
          height="16px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="90px"
          left="33px"
          {...getOverrideProps(overrides, "Analytics")}
        >
          <Icon
            width="48px"
            height="16px"
            viewBox={{ minX: 0, minY: 0, width: 48, height: 16 }}
            paths={[
              {
                d: "M48 8C48 12.4183 37.2548 16 24 16C10.7452 16 0 12.4183 0 8C0 3.58172 10.7452 0 24 0C37.2548 0 48 3.58172 48 8Z",
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
            {...getOverrideProps(overrides, "analyticsShape")}
          ></Icon>
          <Text
            fontFamily="Lato"
            fontSize="8px"
            fontWeight="400"
            color="rgba(251,246,243,1)"
            lineHeight="9.600000381469727px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="36px"
            height="9px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="3px"
            left="6px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Analytics"
            {...getOverrideProps(overrides, "analytics")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="397px"
          height="94px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="46px"
          left="121px"
          {...getOverrideProps(overrides, "BusinessBanner")}
        >
          <Icon
            width="397px"
            height="76px"
            viewBox={{ minX: 0, minY: 0, width: 397, height: 76 }}
            paths={[
              {
                d: "M0 0L397 0L397 76L0 76L0 0Z",
                fill: "rgba(82,150,165,1)",
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
            {...getOverrideProps(overrides, "profileBannerImage")}
          ></Icon>
          <View
            width="397px"
            height="18px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="76px"
            left="0px"
            borderRadius="0px 0px 6px 6px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(165,117,72,1)"
            {...getOverrideProps(overrides, "bannerOptionsShape")}
          ></View>
          <Image
            width="10px"
            height="10px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="80px"
            left="261px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "mapLogo")}
          ></Image>
          <View
            padding="0px 0px 0px 0px"
            width="307px"
            height="13px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="77px"
            left="41px"
            {...getOverrideProps(overrides, "BannerOptions")}
          >
            <Text
              fontFamily="Lato"
              fontSize="12px"
              fontWeight="400"
              color="rgba(252,215,173,1)"
              lineHeight="14.40000057220459px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="72px"
              height="13px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="235px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Distance "
              {...getOverrideProps(overrides, "distance")}
            ></Text>
            <Text
              fontFamily="Lato"
              fontSize="12px"
              fontWeight="400"
              color="rgba(252,215,173,1)"
              lineHeight="14.40000057220459px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="72px"
              height="13px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="107px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Rating "
              {...getOverrideProps(overrides, "rating")}
            ></Text>
            <Text
              fontFamily="Lato"
              fontSize="12px"
              fontWeight="400"
              color="rgba(252,215,173,1)"
              lineHeight="14.40000057220459px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="72px"
              height="13px"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0px"
              left="0px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Category"
              {...getOverrideProps(overrides, "category")}
            ></Text>
          </View>
          <Image
            width="9px"
            height="9px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="63px"
            left="5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "editButton")}
          ></Image>
          <Text
            fontFamily="Lato"
            fontSize="16px"
            fontWeight="400"
            color="rgba(252,215,173,1)"
            lineHeight="19.200000762939453px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="211px"
            height="40px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="130px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Business Name"
            {...getOverrideProps(overrides, "businessName")}
          ></Text>
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
      </View>
    </View>
  );
}
