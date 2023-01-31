/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductViewOverridesProps = {
    ProductView?: PrimitiveOverrideProps<ViewProps>;
    "Product/Service View [Customer Preview w/o edit button] "?: PrimitiveOverrideProps<ViewProps>;
    EditReviewsButton?: PrimitiveOverrideProps<ViewProps>;
    reviewsShape?: PrimitiveOverrideProps<ViewProps>;
    reviewsText?: PrimitiveOverrideProps<TextProps>;
    EditProduct?: PrimitiveOverrideProps<ViewProps>;
    editShape?: PrimitiveOverrideProps<IconProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
    Item?: PrimitiveOverrideProps<ViewProps>;
    productShape?: PrimitiveOverrideProps<IconProps>;
    Ratings?: PrimitiveOverrideProps<ViewProps>;
    star382877?: PrimitiveOverrideProps<IconProps>;
    star382878?: PrimitiveOverrideProps<IconProps>;
    star382879?: PrimitiveOverrideProps<IconProps>;
    star382880?: PrimitiveOverrideProps<IconProps>;
    star382881?: PrimitiveOverrideProps<IconProps>;
    avrgPriceRange?: PrimitiveOverrideProps<TextProps>;
    productName?: PrimitiveOverrideProps<TextProps>;
    itemPhoto?: PrimitiveOverrideProps<IconProps>;
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
export declare type ProductViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProductViewOverridesProps | undefined | null;
}>;
export default function ProductView(props: ProductViewProps): React.ReactElement;
