/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsercansignintotheiraccountOverridesProps = {
    Usercansignintotheiraccount?: PrimitiveOverrideProps<ViewProps>;
    signUpShape?: PrimitiveOverrideProps<ViewProps>;
    LogInButton?: PrimitiveOverrideProps<ViewProps>;
    loginButtonShape?: PrimitiveOverrideProps<ViewProps>;
    loginText?: PrimitiveOverrideProps<TextProps>;
    "SSO Icons"?: PrimitiveOverrideProps<ViewProps>;
    facebook?: PrimitiveOverrideProps<ImageProps>;
    apple?: PrimitiveOverrideProps<ImageProps>;
    google?: PrimitiveOverrideProps<ImageProps>;
    OrBanner?: PrimitiveOverrideProps<ViewProps>;
    dividerRight?: PrimitiveOverrideProps<IconProps>;
    orText?: PrimitiveOverrideProps<TextProps>;
    dividerLeft?: PrimitiveOverrideProps<IconProps>;
    LoginInfo?: PrimitiveOverrideProps<ViewProps>;
    Password?: PrimitiveOverrideProps<ViewProps>;
    passwordField?: PrimitiveOverrideProps<ViewProps>;
    password?: PrimitiveOverrideProps<TextProps>;
    UsernameEmail?: PrimitiveOverrideProps<ViewProps>;
    usernameField?: PrimitiveOverrideProps<ViewProps>;
    username?: PrimitiveOverrideProps<TextProps>;
    UserNeedsAccount?: PrimitiveOverrideProps<TextProps>;
    Header2?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<ImageProps>;
    headerBanner?: PrimitiveOverrideProps<ViewProps>;
    HeaderOptions?: PrimitiveOverrideProps<ViewProps>;
    localFinds?: PrimitiveOverrideProps<TextProps>;
    categories?: PrimitiveOverrideProps<TextProps>;
    search?: PrimitiveOverrideProps<TextProps>;
    topSellers?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UsercansignintotheiraccountProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UsercansignintotheiraccountOverridesProps | undefined | null;
}>;
export default function Usercansignintotheiraccount(props: UsercansignintotheiraccountProps): React.ReactElement;
