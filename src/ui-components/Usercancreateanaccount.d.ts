/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsercancreateanaccountOverridesProps = {
    Usercancreateanaccount?: PrimitiveOverrideProps<ViewProps>;
    RegisterButton?: PrimitiveOverrideProps<ViewProps>;
    UserTypeSelection?: PrimitiveOverrideProps<ViewProps>;
    SignUpInfo?: PrimitiveOverrideProps<ViewProps>;
    UserHasAccount?: PrimitiveOverrideProps<ViewProps>;
    signUpShape?: PrimitiveOverrideProps<ViewProps>;
    Header1?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type UsercancreateanaccountProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UsercancreateanaccountOverridesProps | undefined | null;
}>;
export default function Usercancreateanaccount(props: UsercancreateanaccountProps): React.ReactElement;
