/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogoColorPalleteIconsOverridesProps = {
    LogoColorPalleteIcons?: PrimitiveOverrideProps<ViewProps>;
    "Current Logo"?: PrimitiveOverrideProps<ImageProps>;
    "Off White "?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<ViewProps>;
    "Fonts: Lato"?: PrimitiveOverrideProps<TextProps>;
    F6C28B?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LogoColorPalleteIconsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LogoColorPalleteIconsOverridesProps | undefined | null;
}>;
export default function LogoColorPalleteIcons(props: LogoColorPalleteIconsProps): React.ReactElement;
