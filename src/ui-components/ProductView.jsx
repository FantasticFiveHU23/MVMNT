/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProductView(props) {
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
      {...getOverrideProps(overrides, "ProductView")}
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
        {...getOverrideProps(
          overrides,
          "Product/Service View [Customer Preview w/o edit button] "
        )}
      >
        <View
          width="100px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="361px"
          left="270px"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,0)"
          {...getOverrideProps(overrides, "EditReviewsButton")}
        >
          <View
            width="100px"
            height="30px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="25px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(130,221,240,1)"
            {...getOverrideProps(overrides, "reviewsShape")}
          ></View>
          <Text
            fontFamily="Inter"
            fontSize="8px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="9.681818008422852px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="10px"
            left="33px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Reviews"
            {...getOverrideProps(overrides, "reviewsText")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="69px"
          height="14px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="97px"
          left="557px"
          {...getOverrideProps(overrides, "EditProduct")}
        >
          <Icon
            width="69px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 69, height: 14 }}
            paths={[
              {
                d: "M69 7C69 10.866 53.5538 14 34.5 14C15.4462 14 0 10.866 0 7C0 3.13401 15.4462 0 34.5 0C53.5538 0 69 3.13401 69 7Z",
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
            {...getOverrideProps(overrides, "editShape")}
          ></Icon>
          <Text
            fontFamily="Lato"
            fontSize="8px"
            fontWeight="400"
            color="rgba(251,246,243,1)"
            lineHeight="9.600000381469727px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="38px"
            height="14px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="13px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="edit"
            {...getOverrideProps(overrides, "edit")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="207px"
          height="166px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="173px"
          left="216px"
          {...getOverrideProps(overrides, "Item")}
        >
          <Icon
            width="207px"
            height="166px"
            viewBox={{ minX: 0, minY: 0, width: 207, height: 166 }}
            paths={[
              {
                d: "M0 9C0 4.02944 4.02944 0 9 0L198 0C202.971 0 207 4.02944 207 9L207 157C207 161.971 202.971 166 198 166L9 166C4.02944 166 0 161.971 0 157L0 9Z",
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
            width="133.07px"
            height="12.63px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="138.93px"
            left="35.49px"
            {...getOverrideProps(overrides, "Ratings")}
          >
            <Icon
              width="17.74px"
              height="12.63px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.742919921875,
                height: 12.63043212890625,
              }}
              paths={[
                {
                  d: "M8.87143 0L11.4617 -1.51344L8.87143 -5.94673L6.28116 -1.51344L8.87143 0ZM11.218 4.01611L8.62768 5.52955L9.43981 6.91952L11.047 7.01124L11.218 4.01611ZM17.3087 4.36371L18.8705 6.92507L27.0839 1.91669L17.4796 1.36858L17.3087 4.36371ZM12.6682 7.1934L11.1063 4.63204L9.06339 5.87778L9.82364 8.14657L12.6682 7.1934ZM14.0859 11.4243L12.8897 14.1755L19.0726 16.8639L16.9305 10.4712L14.0859 11.4243ZM8.87143 9.15707L10.0677 6.40587L8.87143 5.88576L7.67521 6.40587L8.87143 9.15707ZM3.65693 11.4243L0.812386 10.4712L-1.32974 16.8639L4.85316 14.1755L3.65693 11.4243ZM5.07468 7.1934L7.91922 8.14657L8.67947 5.87778L6.63655 4.63204L5.07468 7.1934ZM0.434198 4.36371L0.263268 1.36858L-9.34103 1.91669L-1.12768 6.92507L0.434198 4.36371ZM6.52491 4.01611L6.69584 7.01124L8.30305 6.91952L9.11518 5.52955L6.52491 4.01611ZM6.28116 1.51344L8.62768 5.52955L13.8082 2.50268L11.4617 -1.51344L6.28116 1.51344ZM11.047 7.01124L17.1377 7.35883L17.4796 1.36858L11.3889 1.02099L11.047 7.01124ZM15.7468 1.80235L11.1063 4.63204L14.2301 9.75475L18.8705 6.92507L15.7468 1.80235ZM9.82364 8.14657L11.2414 12.3775L16.9305 10.4712L15.5127 6.24022L9.82364 8.14657ZM15.2821 8.67314L10.0677 6.40587L7.67521 11.9083L12.8897 14.1755L15.2821 8.67314ZM7.67521 6.40587L2.46071 8.67314L4.85316 14.1755L10.0677 11.9083L7.67521 6.40587ZM6.50148 12.3775L7.91922 8.14657L2.23013 6.24022L0.812386 10.4712L6.50148 12.3775ZM6.63655 4.63204L1.99607 1.80235L-1.12768 6.92507L3.5128 9.75475L6.63655 4.63204ZM0.605129 7.35883L6.69584 7.01124L6.35398 1.02099L0.263268 1.36858L0.605129 7.35883ZM9.11518 5.52955L11.4617 1.51344L6.28116 -1.51344L3.93463 2.50268L9.11518 5.52955Z",
                  stroke: "rgba(241,198,68,1)",
                  fillRule: "nonzero",
                  strokeWidth: 3,
                },
                {
                  d: "M8.87143 0L11.218 4.01611L17.3087 4.36371L12.6682 7.1934L14.0859 11.4243L8.87143 9.15707L3.65693 11.4243L5.07468 7.1934L0.434198 4.36371L6.52491 4.01611L8.87143 0Z",
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
              {...getOverrideProps(overrides, "star382877")}
            ></Icon>
            <Icon
              width="22.18px"
              height="12.63px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.1785888671875,
                height: 12.63043212890625,
              }}
              paths={[
                {
                  d: "M11.0893 0L13.5119 -1.76938L11.0893 -5.08652L8.66663 -1.76938L11.0893 0ZM14.0224 4.01611L11.5998 5.7855L12.4484 6.94737L13.8856 7.01299L14.0224 4.01611ZM21.6358 4.36371L22.9511 7.05999L21.7726 1.36683L21.6358 4.36371ZM15.8352 7.1934L14.5199 4.49711L11.9736 5.73927L13.0682 8.35242L15.8352 7.1934ZM17.6074 11.4243L16.6218 14.2578L22.972 16.4667L20.3745 10.2653L17.6074 11.4243ZM11.0893 9.15707L12.0749 6.32359L11.0893 5.98076L10.1037 6.32359L11.0893 9.15707ZM4.57117 11.4243L1.8041 10.2653L-0.793408 16.4667L5.55677 14.2578L4.57117 11.4243ZM6.34334 7.1934L9.11041 8.35242L10.205 5.73927L7.65866 4.49712L6.34334 7.1934ZM0.542748 4.36371L0.405924 1.36683L-0.772571 7.05999L0.542748 4.36371ZM8.15613 4.01611L8.29296 7.01299L9.73022 6.94737L10.5788 5.7855L8.15613 4.01611ZM8.66663 1.76938L11.5998 5.7855L16.4451 2.24673L13.5119 -1.76938L8.66663 1.76938ZM13.8856 7.01299L21.499 7.36059L21.7726 1.36683L14.1593 1.01924L13.8856 7.01299ZM20.3205 1.66743L14.5199 4.49711L17.1505 9.88968L22.9511 7.05999L20.3205 1.66743ZM13.0682 8.35242L14.8403 12.5834L20.3745 10.2653L18.6023 6.03438L13.0682 8.35242ZM18.593 8.59086L12.0749 6.32359L10.1037 11.9905L16.6218 14.2578L18.593 8.59086ZM10.1037 6.32359L3.58557 8.59086L5.55677 14.2578L12.0749 11.9905L10.1037 6.32359ZM7.33824 12.5834L9.11041 8.35242L3.57627 6.03438L1.8041 10.2653L7.33824 12.5834ZM7.65866 4.49712L1.85807 1.66743L-0.772571 7.05999L5.02803 9.88968L7.65866 4.49712ZM0.679573 7.36059L8.29296 7.01299L8.01931 1.01924L0.405924 1.36683L0.679573 7.36059ZM10.5788 5.7855L13.5119 1.76938L8.66663 -1.76938L5.73347 2.24673L10.5788 5.7855Z",
                  stroke: "rgba(241,198,68,1)",
                  fillRule: "nonzero",
                  strokeWidth: 3,
                },
                {
                  d: "M11.0893 0L14.0224 4.01611L21.6358 4.36371L15.8352 7.1934L17.6074 11.4243L11.0893 9.15707L4.57117 11.4243L6.34334 7.1934L0.542748 4.36371L8.15613 4.01611L11.0893 0Z",
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
              left="26.61px"
              {...getOverrideProps(overrides, "star382878")}
            ></Icon>
            <Icon
              width="17.74px"
              height="12.63px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.7427978515625,
                height: 12.63043212890625,
              }}
              paths={[
                {
                  d: "M8.87143 0L11.4617 -1.51344L8.87143 -5.94673L6.28116 -1.51344L8.87143 0ZM11.218 4.01611L8.62768 5.52955L9.43981 6.91952L11.047 7.01124L11.218 4.01611ZM17.3087 4.36371L18.8705 6.92507L27.0839 1.91669L17.4796 1.36858L17.3087 4.36371ZM12.6682 7.1934L11.1063 4.63204L9.06339 5.87778L9.82364 8.14657L12.6682 7.1934ZM14.0859 11.4243L12.8897 14.1755L19.0726 16.8639L16.9305 10.4712L14.0859 11.4243ZM8.87143 9.15707L10.0677 6.40587L8.87143 5.88576L7.67521 6.40587L8.87143 9.15707ZM3.65693 11.4243L0.812386 10.4712L-1.32974 16.8639L4.85316 14.1755L3.65693 11.4243ZM5.07468 7.1934L7.91922 8.14657L8.67947 5.87778L6.63655 4.63204L5.07468 7.1934ZM0.434198 4.36371L0.263268 1.36858L-9.34103 1.91669L-1.12768 6.92507L0.434198 4.36371ZM6.52491 4.01611L6.69584 7.01124L8.30305 6.91952L9.11518 5.52955L6.52491 4.01611ZM6.28116 1.51344L8.62768 5.52955L13.8082 2.50268L11.4617 -1.51344L6.28116 1.51344ZM11.047 7.01124L17.1377 7.35883L17.4796 1.36858L11.3889 1.02099L11.047 7.01124ZM15.7468 1.80235L11.1063 4.63204L14.2301 9.75475L18.8705 6.92507L15.7468 1.80235ZM9.82364 8.14657L11.2414 12.3775L16.9305 10.4712L15.5127 6.24022L9.82364 8.14657ZM15.2821 8.67314L10.0677 6.40587L7.67521 11.9083L12.8897 14.1755L15.2821 8.67314ZM7.67521 6.40587L2.46071 8.67314L4.85316 14.1755L10.0677 11.9083L7.67521 6.40587ZM6.50148 12.3775L7.91922 8.14657L2.23013 6.24022L0.812386 10.4712L6.50148 12.3775ZM6.63655 4.63204L1.99607 1.80235L-1.12768 6.92507L3.5128 9.75475L6.63655 4.63204ZM0.605129 7.35883L6.69584 7.01124L6.35398 1.02099L0.263268 1.36858L0.605129 7.35883ZM9.11518 5.52955L11.4617 1.51344L6.28116 -1.51344L3.93463 2.50268L9.11518 5.52955Z",
                  stroke: "rgba(241,198,68,1)",
                  fillRule: "nonzero",
                  strokeWidth: 3,
                },
                {
                  d: "M8.87143 0L11.218 4.01611L17.3087 4.36371L12.6682 7.1934L14.0859 11.4243L8.87143 9.15707L3.65693 11.4243L5.07468 7.1934L0.434198 4.36371L6.52491 4.01611L8.87143 0Z",
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
              left="57.66px"
              {...getOverrideProps(overrides, "star382879")}
            ></Icon>
            <Icon
              width="22.18px"
              height="12.63px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.1785888671875,
                height: 12.63043212890625,
              }}
              paths={[
                {
                  d: "M11.0893 0L14.0224 4.01611L21.6358 4.36371L15.8352 7.1934L17.6074 11.4243L11.0893 9.15707L4.57117 11.4243L6.34334 7.1934L0.542748 4.36371L8.15613 4.01611L11.0893 0Z",
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
              left="84.28px"
              {...getOverrideProps(overrides, "star382880")}
            ></Icon>
            <Icon
              width="17.74px"
              height="12.63px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 17.7427978515625,
                height: 12.63043212890625,
              }}
              paths={[
                {
                  d: "M8.87143 0L11.218 4.01611L17.3087 4.36371L12.6682 7.1934L14.0859 11.4243L8.87143 9.15707L3.65693 11.4243L5.07468 7.1934L0.434198 4.36371L6.52491 4.01611L8.87143 0Z",
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
              left="115.33px"
              {...getOverrideProps(overrides, "star382881")}
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
            width="124.2px"
            height="12.63px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="119.09px"
            left="41.4px"
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
            width="136.03px"
            height="16.24px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="102.85px"
            left="35.49px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Product Name"
            {...getOverrideProps(overrides, "productName")}
          ></Text>
          <Icon
            width="165.6px"
            height="83px"
            viewBox={{ minX: 0, minY: 0, width: 165.5999755859375, height: 83 }}
            paths={[
              {
                d: "M10 1L155.6 1L155.6 -1L10 -1L10 1ZM164.6 10L164.6 73L166.6 73L166.6 10L164.6 10ZM155.6 82L9.99999 82L9.99999 84L155.6 84L155.6 82ZM1 73L1 10L-1 10L-1 73L1 73ZM9.99999 82C5.02943 82 1 77.9706 1 73L-1 73C-1 79.0751 3.92486 84 9.99999 84L9.99999 82ZM164.6 73C164.6 77.9706 160.571 82 155.6 82L155.6 84C161.675 84 166.6 79.0751 166.6 73L164.6 73ZM155.6 1C160.571 1 164.6 5.02944 164.6 10L166.6 10C166.6 3.92487 161.675 -1 155.6 -1L155.6 1ZM10 -1C3.92487 -1 -1 3.92487 -1 10L1 10C1 5.02944 5.02944 1 10 1L10 -1Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
              {
                d: "M0 10C0 4.47715 4.47715 0 10 0L155.6 0C161.123 0 165.6 4.47715 165.6 10L165.6 73C165.6 78.5229 161.123 83 155.6 83L9.99999 83C4.47715 83 0 78.5228 0 73L0 10Z",
                fill: "rgba(246,194,139,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.63px"
            left="20.7px"
            {...getOverrideProps(overrides, "itemPhoto")}
          ></Icon>
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
