/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessviewsOverridesProps = {
    Businessviews?: PrimitiveOverrideProps<ViewProps>;
    "Product/Service View [Edit/Update] "?: PrimitiveOverrideProps<ViewProps>;
    EditReviewsButton?: PrimitiveOverrideProps<ViewProps>;
    reviewsShape?: PrimitiveOverrideProps<ViewProps>;
    reviewsText?: PrimitiveOverrideProps<TextProps>;
    SaveButton?: PrimitiveOverrideProps<ViewProps>;
    editShape382612?: PrimitiveOverrideProps<IconProps>;
    save?: PrimitiveOverrideProps<TextProps>;
    EditProduct?: PrimitiveOverrideProps<ViewProps>;
    editShape382615?: PrimitiveOverrideProps<IconProps>;
    edit?: PrimitiveOverrideProps<TextProps>;
    Item?: PrimitiveOverrideProps<ViewProps>;
    productShape?: PrimitiveOverrideProps<IconProps>;
    Ratings?: PrimitiveOverrideProps<ViewProps>;
    star382620?: PrimitiveOverrideProps<IconProps>;
    star382621?: PrimitiveOverrideProps<IconProps>;
    star382622?: PrimitiveOverrideProps<IconProps>;
    star382623?: PrimitiveOverrideProps<IconProps>;
    star382624?: PrimitiveOverrideProps<IconProps>;
    AvrgPrice?: PrimitiveOverrideProps<ViewProps>;
    avrgPriceRange?: PrimitiveOverrideProps<TextProps>;
    editPriceRange?: PrimitiveOverrideProps<TextProps>;
    ProductName?: PrimitiveOverrideProps<ViewProps>;
    editProductName382629?: PrimitiveOverrideProps<TextProps>;
    productName?: PrimitiveOverrideProps<TextProps>;
    itemPhoto?: PrimitiveOverrideProps<IconProps>;
    editProductName382632?: PrimitiveOverrideProps<TextProps>;
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
export declare type BusinessviewsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: BusinessviewsOverridesProps | undefined | null;
}>;
export default function Businessviews(props: BusinessviewsProps): React.ReactElement;
