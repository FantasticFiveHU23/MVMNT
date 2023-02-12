/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditViewOverridesProps = {
    EditView?: PrimitiveOverrideProps<ViewProps>;
    "User can edit their profile 2"?: PrimitiveOverrideProps<ViewProps>;
    EditField?: PrimitiveOverrideProps<ViewProps>;
    editFieldShape?: PrimitiveOverrideProps<IconProps>;
    locationField?: PrimitiveOverrideProps<ViewProps>;
    location?: PrimitiveOverrideProps<TextProps>;
    locationLogo?: PrimitiveOverrideProps<ImageProps>;
    userIDField?: PrimitiveOverrideProps<ViewProps>;
    userID?: PrimitiveOverrideProps<TextProps>;
    userNameField?: PrimitiveOverrideProps<ViewProps>;
    userNameText?: PrimitiveOverrideProps<TextProps>;
    DoneButton?: PrimitiveOverrideProps<ViewProps>;
    doneShape?: PrimitiveOverrideProps<ViewProps>;
    doneText?: PrimitiveOverrideProps<TextProps>;
    EditProfilePicture?: PrimitiveOverrideProps<ViewProps>;
    profileImage?: PrimitiveOverrideProps<IconProps>;
    editProfilePictureText?: PrimitiveOverrideProps<TextProps>;
    editProfilePictureButtonLogo?: PrimitiveOverrideProps<ImageProps>;
    Header4?: PrimitiveOverrideProps<ViewProps>;
    logo?: PrimitiveOverrideProps<ImageProps>;
    headerBanner?: PrimitiveOverrideProps<ViewProps>;
    HeaderOptions?: PrimitiveOverrideProps<ViewProps>;
    localFinds?: PrimitiveOverrideProps<TextProps>;
    categories?: PrimitiveOverrideProps<TextProps>;
    search?: PrimitiveOverrideProps<TextProps>;
    topSellers?: PrimitiveOverrideProps<TextProps>;
    ProfileImage?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type EditViewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EditViewOverridesProps | undefined | null;
}>;
export default function EditView(props: EditViewProps): React.ReactElement;
