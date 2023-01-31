/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTypeSelectionOverridesProps = {
    UserTypeSelection?: PrimitiveOverrideProps<ViewProps>;
    staticButtonBusiness?: PrimitiveOverrideProps<ViewProps>;
    selectBusinessText?: PrimitiveOverrideProps<TextProps>;
    selectCustomerBubble7611?: PrimitiveOverrideProps<IconProps>;
    staticButtonCustomer?: PrimitiveOverrideProps<ViewProps>;
    selectCustomerText?: PrimitiveOverrideProps<TextProps>;
    selectCustomerBubble766?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type UserTypeSelectionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UserTypeSelectionOverridesProps | undefined | null;
}>;
export default function UserTypeSelection(props: UserTypeSelectionProps): React.ReactElement;
