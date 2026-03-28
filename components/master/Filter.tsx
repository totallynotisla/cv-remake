import { cn } from "@/lib/utils";
import React from "react";

// 1. Define the discriminated union
// We use React.Dispatch<React.SetStateAction<T>> to correctly type the state setter
// (it supports both direct values and functional updates like prev => ...).
type Props = {
	title: string;
	value: string;
} & (
	| {
			toggle: true; // The discriminator
			current: string[];
			setCurrent: React.Dispatch<React.SetStateAction<string[]>>;
	  }
	| {
			toggle?: false | null; // The discriminator (optional or false)
			current: string;
			setCurrent: (value: string) => void;
	  }
);

// 2. Do NOT destructure the discriminated props (current, setCurrent, toggle) here.
// Keep them in 'props' so TS can narrow them together.
export function FilterItem(props: Props) {
	const { title, value } = props;

	const isActive = React.useMemo(() => {
		// TypeScript knows if toggle is true, current is string[]
		if (props.toggle) {
			return props.current.includes(value);
		}
		// TypeScript knows if toggle is false/undefined, current is string
		return props.current === value;
	}, [props.current, props.toggle, value]); //eslint-disable-line react-hooks/exhaustive-deps

	function clickFilter() {
		if (props.toggle) {
			props.setCurrent((prev) => {
				if (prev.includes(value)) {
					return prev.filter((v) => v !== value);
				} else {
					return [...prev, value];
				}
			});
		} else {
			// TS strictly identifies this as the 'single' variant
			props.setCurrent(value);
		}
	}

	return (
		<div
			className={cn("flex uppercase select-none cursor-pointer hover:border-primary border-primary/25 px-4 py-2 border-b-2 transition", isActive && "border-primary")}
			onClick={clickFilter}
		>
			<span className="w-max">{title}</span>
		</div>
	);
}

type FilterContentProps = {
	children: React.ReactNode;
	className?: string;
};

export function FilterContent({ children, className }: FilterContentProps) {
	return (
		<div className={cn("flex isolate relative overflow-x-auto", className)}>
			<div className="absolute z-[-1] max-md:hidden left-0 bottom-0 h-[2px] right-0 bg-primary/25 border-none"></div>
			{children}
		</div>
	);
}
