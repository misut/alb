import { ReactNode } from "react";
import { ReactPanel } from "./ReactPanel";

export type ReactComponent = ({ panel = null }: { panel?: ReactPanel }) => ReactNode
