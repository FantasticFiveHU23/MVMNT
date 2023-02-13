/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RegisterButtonProps } from "./RegisterButton";
import { ViewProps } from "@aws-amplify/ui-react";
import { UserTypeSelectionProps } from "./UserTypeSelection";
import { SignUpInfoProps } from "./SignUpInfo";
import { HeaderProps } from "./Header";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsercancreateanaccountOverridesProps = {
    Usercancreateanaccount?: PrimitiveOverrideProps<ViewProps>;
    RegisterButton?: RegisterButtonProps;
    signUpShape?: PrimitiveOverrideProps<ViewProps>;
    UserTypeSelection?: UserTypeSelectionProps;
    SignUpInfo?: SignUpInfoProps;
    UserHasAccount?: PrimitiveOverrideProps<ViewProps>;
    Header1?: HeaderProps;
} & EscapeHatchProps;
export declare type UsercancreateanaccountProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UsercancreateanaccountOverridesProps | undefined | null;
}>;
export default function Usercancreateanaccount(props: UsercancreateanaccountProps): React.ReactElement;
