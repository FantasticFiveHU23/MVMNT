/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FindItemViewOverridesProps = {
    FindItemView?: PrimitiveOverrideProps<ViewProps>;
    "User can find item in area"?: PrimitiveOverrideProps<ViewProps>;
    Item?: PrimitiveOverrideProps<ViewProps>;
    productShape?: PrimitiveOverrideProps<ViewProps>;
    itemPhoto?: PrimitiveOverrideProps<ViewProps>;
    productName?: PrimitiveOverrideProps<TextProps>;
    avrgPriceRange?: PrimitiveOverrideProps<TextProps>;
    Ratings388280?: PrimitiveOverrideProps<ViewProps>;
    star388281?: PrimitiveOverrideProps<IconProps>;
    star388282?: PrimitiveOverrideProps<IconProps>;
    star388283?: PrimitiveOverrideProps<IconProps>;
    star388284?: PrimitiveOverrideProps<IconProps>;
    star388285?: PrimitiveOverrideProps<IconProps>;
    FilterField?: PrimitiveOverrideProps<ViewProps>;
    sideBar?: PrimitiveOverrideProps<ViewProps>;
    LeftSideBar?: PrimitiveOverrideProps<ViewProps>;
    ratingsBubble?: PrimitiveOverrideProps<IconProps>;
    Ratings388290?: PrimitiveOverrideProps<TextProps>;
    priceRangeBubble?: PrimitiveOverrideProps<IconProps>;
    priceRange?: PrimitiveOverrideProps<TextProps>;
    withinRangeBubble?: PrimitiveOverrideProps<IconProps>;
    withinRange?: PrimitiveOverrideProps<TextProps>;
    openNowBubble?: PrimitiveOverrideProps<IconProps>;
    openNow?: PrimitiveOverrideProps<TextProps>;
    filterResults?: PrimitiveOverrideProps<TextProps>;
    Rating?: PrimitiveOverrideProps<ViewProps>;
    star388299?: PrimitiveOverrideProps<IconProps>;
    star388300?: PrimitiveOverrideProps<IconProps>;
    star388301?: PrimitiveOverrideProps<IconProps>;
    star388302?: PrimitiveOverrideProps<IconProps>;
    star388303?: PrimitiveOverrideProps<IconProps>;
    SearchBar?: PrimitiveOverrideProps<ViewProps>;
    searchBar388305?: PrimitiveOverrideProps<ViewProps>;
    searchIcon?: PrimitiveOverrideProps<ImageProps>;
    searchBar388307?: PrimitiveOverrideProps<IconProps>;
    filterText?: PrimitiveOverrideProps<TextProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<ImageProps>;
    headerBanner?: PrimitiveOverrideProps<ViewProps>;
    HeaderOptions?: PrimitiveOverrideProps<ViewProps>;
    localFinds?: PrimitiveOverrideProps<TextProps>;
    categories?: PrimitiveOverrideProps<TextProps>;
    search?: PrimitiveOverrideProps<TextProps>;
    topSellers?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<IconProps>;
    ScrollBar?: PrimitiveOverrideProps<ViewProps>;
    scrollbarField?: PrimitiveOverrideProps<ViewProps>;
    scrollbar?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type FindItemViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FindItemViewOverridesProps | undefined | null;
}>;
export default function FindItemView(props: FindItemViewProps): React.ReactElement;
