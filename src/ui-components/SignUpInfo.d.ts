/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpInfoOverridesProps = {
    SignUpInfo?: PrimitiveOverrideProps<ViewProps>;
    Email?: PrimitiveOverrideProps<ViewProps>;
    emailField?: PrimitiveOverrideProps<ViewProps>;
    email?: PrimitiveOverrideProps<TextProps>;
    Password?: PrimitiveOverrideProps<ViewProps>;
    passwordField?: PrimitiveOverrideProps<ViewProps>;
    password?: PrimitiveOverrideProps<TextProps>;
    Username?: PrimitiveOverrideProps<ViewProps>;
    usernameField?: PrimitiveOverrideProps<ViewProps>;
    username?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SignUpInfoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SignUpInfoOverridesProps | undefined | null;
}>;
export default function SignUpInfo(props: SignUpInfoProps): React.ReactElement;
