import { ReactNode } from "react";
import { ReactPanel } from "./ReactPanel";

export type ReactComponent = ({ panel }: { panel?: ReactPanel }) => ReactNode
