import React, { useEffect } from "react";
import { Options, Splide } from "@splidejs/splide";
import { cn } from "@/lib/utils";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export type SliderOptions = Options;

type SliderProps = {
	children: React.ReactNode;
	className?: string;
	options: SliderOptions;
	fn?: (s: Splide) => any; //eslint-disable-line @typescript-eslint/no-explicit-any
};

export const Slider = ({ children, className, options, fn }: SliderProps) => {
	const sliderRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (sliderRef.current) {
			const splide = new Splide(sliderRef.current, options);
			splide.mount({ AutoScroll });

			fn?.(splide);

			return () => {
				splide.destroy();
			};
		}
	}, [options]); //eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className={cn(`splide`, className)} ref={sliderRef}>
			{children}
		</div>
	);
};

type SlideTrackProps = {
	children: React.ReactNode;
	className?: string;
	stretch?: boolean;
};

const SlideTrack = React.forwardRef<HTMLDivElement, SlideTrackProps>(({ children, className, stretch }: SlideTrackProps, ref) => {
	return (
		<div ref={ref} className={cn(`splide__track`, className)}>
			<ul className={cn("splide__list w-full h-full", stretch && "items-stretch")}>{children}</ul>
		</div>
	);
});

SlideTrack.displayName = "SlideTrack";
export { SlideTrack };

export function SliderItem({ children, className, asChild }: { children: React.ReactNode; className?: string; asChild?: boolean }) {
	if (asChild) {
		return <>{children}</>;
	}
	return <li className={cn("splide__slide", className)}>{children}</li>;
}
