import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import Link from "next/link";
import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

type Props = {
    title: string;
    className?: string;
    children: React.ReactNode;
};

function TechItem({ children, title, className }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>
                    <Card className={cn("px-2 py-1 rounded-sm transition", className)}>{title}</Card>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default TechItem;
