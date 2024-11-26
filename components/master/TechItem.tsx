import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";

type Props = {
    title: string;

    children: React.ReactNode;
};

function TechItem({ children, title }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                    <Card className="px-2 py-1 rounded-sm transition">{title}</Card>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default TechItem;
