/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Group1OverridesProps = {
    Group1?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 37"?: PrimitiveOverrideProps<ViewProps>;
    "Log In"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Group1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group1OverridesProps | undefined | null;
}>;
export default function Group1(props: Group1Props): React.ReactElement;
