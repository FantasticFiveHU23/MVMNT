/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnalyticsViewOverridesProps = {
    AnalyticsView?: PrimitiveOverrideProps<ViewProps>;
    "Business Page Analytics "?: PrimitiveOverrideProps<ViewProps>;
    PurchaseRates?: PrimitiveOverrideProps<ViewProps>;
    purchaseCountShape?: PrimitiveOverrideProps<ViewProps>;
    purchaseCount?: PrimitiveOverrideProps<TextProps>;
    purchaseNumber?: PrimitiveOverrideProps<TextProps>;
    Item5?: PrimitiveOverrideProps<ViewProps>;
    productShape?: PrimitiveOverrideProps<IconProps>;
    Ratings?: PrimitiveOverrideProps<ViewProps>;
    star382833?: PrimitiveOverrideProps<IconProps>;
    star382834?: PrimitiveOverrideProps<IconProps>;
    star382835?: PrimitiveOverrideProps<IconProps>;
    star382836?: PrimitiveOverrideProps<IconProps>;
    star382837?: PrimitiveOverrideProps<IconProps>;
    avrgPriceRange?: PrimitiveOverrideProps<TextProps>;
    productName?: PrimitiveOverrideProps<TextProps>;
    itemPhoto?: PrimitiveOverrideProps<IconProps>;
    "Most Popular Products"?: PrimitiveOverrideProps<TextProps>;
    "Line chart"?: PrimitiveOverrideProps<ViewProps>;
    chartField?: PrimitiveOverrideProps<ViewProps>;
    "Business Page Views"?: PrimitiveOverrideProps<TextProps>;
    Analytics?: PrimitiveOverrideProps<ViewProps>;
    analyticsShape?: PrimitiveOverrideProps<IconProps>;
    analytics?: PrimitiveOverrideProps<TextProps>;
    BusinessBanner?: PrimitiveOverrideProps<ViewProps>;
    profileBannerImage?: PrimitiveOverrideProps<IconProps>;
    bannerOptionsShape?: PrimitiveOverrideProps<ViewProps>;
    mapLogo?: PrimitiveOverrideProps<ImageProps>;
    BannerOptions?: PrimitiveOverrideProps<ViewProps>;
    distance?: PrimitiveOverrideProps<TextProps>;
    rating?: PrimitiveOverrideProps<TextProps>;
    category?: PrimitiveOverrideProps<TextProps>;
    editButton?: PrimitiveOverrideProps<ImageProps>;
    businessName?: PrimitiveOverrideProps<TextProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<ImageProps>;
    headerBanner?: PrimitiveOverrideProps<ViewProps>;
    HeaderOptions?: PrimitiveOverrideProps<ViewProps>;
    localFinds?: PrimitiveOverrideProps<TextProps>;
    categories?: PrimitiveOverrideProps<TextProps>;
    search?: PrimitiveOverrideProps<TextProps>;
    topSellers?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type AnalyticsViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AnalyticsViewOverridesProps | undefined | null;
}>;
export default function AnalyticsView(props: AnalyticsViewProps): React.ReactElement;
