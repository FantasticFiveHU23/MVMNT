/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoadviewOverridesProps = {
    Loadview?: PrimitiveOverrideProps<ViewProps>;
    "Loading Screen "?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<ImageProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type LoadviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoadviewOverridesProps | undefined | null;
}>;
export default function Loadview(props: LoadviewProps): React.ReactElement;
