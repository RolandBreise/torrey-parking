/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type NoParkingProps = React.PropsWithChildren<Partial<ViewProps> & {
    GymSpots?: String;
    MainSpots?: String;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function NoParking(props: NoParkingProps): React.ReactElement;