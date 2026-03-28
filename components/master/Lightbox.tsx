import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { SlideTrack, Slider, SliderItem, SliderOptions } from "./Slider";
import { Splide } from "@splidejs/splide";
import { ChevronLeft, ChevronRight, X, Download } from "lucide-react";

type Props = {
	lightbox: LightboxAnjeng;
	onClose?: () => void;
};

export default function Lightbox({ lightbox, onClose }: Props) {
	const [splideInstance, setSplideInstance] = useState<Splide | null>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Options memoized to prevent infinite re-render loop
	const options: SliderOptions = useMemo(
		() => ({
			type: "fade",
			rewind: false, // Set to false so we can disable arrows at ends
			autoplay: false,
			pagination: false,
			arrows: false,
			perPage: 1,
			lazyLoad: "nearby",
			drag: false,
		}),
		[],
	);

	// Sync state: Open specific slide when lightbox opens
	useEffect(() => {
		if (lightbox.isOpened && splideInstance) {
			const index = lightbox.getSlide();
			splideInstance.go(index);
			setCurrentIndex(index);
		}
	}, [lightbox.isOpened, lightbox.getSlide(), splideInstance]); //eslint-disable-line react-hooks/exhaustive-deps

	// Handle Closing
	const handleClose = useCallback(() => {
		lightbox.close();
		if (onClose) onClose();
	}, [lightbox, onClose]);

	// Keyboard Navigation (Escape to close)
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!lightbox.isOpened) return;
			if (e.key === "Escape") handleClose();
			if (e.key === "ArrowLeft") splideInstance?.go("<");
			if (e.key === "ArrowRight") splideInstance?.go(">");
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [lightbox.isOpened, handleClose, splideInstance]);

	// Navigation Handlers
	const handlePrev = (e: React.MouseEvent) => {
		e.stopPropagation();
		splideInstance?.go("<");
	};

	const handleNext = (e: React.MouseEvent) => {
		e.stopPropagation();
		splideInstance?.go(">");
	};

	// Download Handler
	const handleDownload = async (e: React.MouseEvent) => {
		e.stopPropagation();
		const currentImage = lightbox.getImages()[currentIndex];

		if (!currentImage) return;

		// Extract URL string (handle Next.js StaticImageData object or string)
		const imageUrl = typeof currentImage.src === "string" ? currentImage.src : currentImage.src.src;

		const filename = currentImage.caption?.title || `image-${currentIndex}`;

		try {
			const response = await fetch(imageUrl);
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = `${filename}.jpg`; // Default extension, creates valid download
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error("Download failed", error);
			// Fallback for simple same-origin links
			const link = document.createElement("a");
			link.href = imageUrl;
			link.download = filename;
			link.target = "_blank";
			link.click();
		}
	};

	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	const totalSlides = lightbox.getImages().length;
	const isFirst = currentIndex === 0;
	const isLast = currentIndex === totalSlides - 1;

	return createPortal(
		<div
			className={cn(
				"fixed inset-0 z-[101] flex items-center justify-center bg-black/95 transition-opacity duration-300 backdrop-blur-sm",
				lightbox.isOpened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
			)}
		>
			{/* Top Right Controls Group */}
			<div className="absolute left-5 right-5 top-5 z-[102] flex items-center gap-4 justify-between">
				<div className="text-white ml-4">
					{currentIndex + 1} / {totalSlides}
				</div>

				{/* Download Button */}
				<div className="flex items-center gap-4">
					<button
						onClick={handleDownload}
						className="text-white/70 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/50"
						title="Download Image"
					>
						<Download size={24} />
					</button>

					{/* Close Button */}
					<button onClick={handleClose} className="text-white/70 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/50" title="Close (Esc)">
						<X size={24} />
					</button>
				</div>
			</div>

			<div className="md:hidden flex items-center justify-between absolute bottom-8 left-0 right-0 mx-8">
				{/* Previous Arrow */}
				<button
					onClick={handlePrev}
					disabled={isFirst}
					className={cn(
						"z-[102] text-black/70 hover:text-black transition-colors p-2 bg-white/20 rounded-full hover:bg-white/50",
						isFirst ? "opacity-0 pointer-events-none translate-x-[-10px]" : "opacity-100 hover:text-black hover:bg-white/10",
					)}
					aria-label="Previous image"
				>
					<ChevronLeft size={32} strokeWidth={1.5} />
				</button>

				{/* Next Arrow */}
				<button
					onClick={handleNext}
					disabled={isLast}
					className={cn(
						"z-[102] text-black/70 hover:text-black transition-colors p-2 bg-white/20 rounded-full hover:bg-white/50",
						isLast ? "opacity-0 pointer-events-none translate-x-[10px]" : "opacity-100 hover:text-black hover:bg-white/10",
					)}
					aria-label="Next image"
				>
					<ChevronRight size={32} strokeWidth={1.5} />
				</button>
			</div>

			{/* Previous Arrow */}
			<button
				onClick={handlePrev}
				disabled={isFirst}
				className={cn(
					"absolute left-4 z-[102] text-white/70 transition-all p-3 rounded-full hidden md:block",
					isFirst ? "opacity-0 pointer-events-none translate-x-[-10px]" : "opacity-100 hover:text-white hover:bg-white/10",
				)}
				aria-label="Previous image"
			>
				<ChevronLeft size={48} strokeWidth={1.5} />
			</button>

			{/* Next Arrow */}
			<button
				onClick={handleNext}
				disabled={isLast}
				className={cn(
					"absolute right-4 z-[102] text-white/70 transition-all p-3 rounded-full hidden md:block",
					isLast ? "opacity-0 pointer-events-none translate-x-[10px]" : "opacity-100 hover:text-white hover:bg-white/10",
				)}
				aria-label="Next image"
			>
				<ChevronRight size={48} strokeWidth={1.5} />
			</button>

			{/* Slider Container */}
			<div className="w-full h-full flex items-center justify-center p-4">
				<Slider
					options={options}
					className="w-full h-full flex items-center justify-center"
					fn={(splide) => {
						setSplideInstance(splide);
						// Update local state when slide moves to control arrow visibility
						splide.on("move", (newIndex) => {
							setCurrentIndex(newIndex);
						});
					}}
				>
					<SlideTrack className="h-full items-center">
						{lightbox.getImages().map((img, idx) => (
							<SliderItem key={idx} className="flex items-center justify-center w-full h-full">
								<div className="relative flex items-center justify-center w-full h-full">
									<div className="relative flex flex-col gap-4">
										<Image
											src={img.src}
											alt={img.caption?.title || "Lightbox image"}
											width={1920}
											height={1080}
											className="max-h-[calc(100vh-10rem)] max-w-[min(70rem,calc(100vw-2rem))] w-auto h-auto object-contain mx-auto shadow-2xl"
											priority={idx === lightbox.getSlide()}
										/>

										{(img.caption?.title || img.caption?.description) && (
											<div className="absolute -bottom-12 left-0 right-0 text-white text-center pointer-events-none">
												{img.caption.title && <h3 className="font-[500] text-lg">{img.caption.title}</h3>}
												{img.caption.description && <p className="text-white/80 text-sm">{img.caption.description}</p>}
											</div>
										)}
									</div>
								</div>
							</SliderItem>
						))}
					</SlideTrack>
				</Slider>
			</div>
		</div>,
		document.body,
	);
}

export type ImageProps = {
	src: StaticImageData | string;
	caption?: Partial<{
		title: string;
		description: string;
	}>;
};

export class LightboxAnjeng {
	private currentSlide: number = 0;
	private images: ImageProps[];
	private isActive: boolean = false;

	constructor(images: ImageProps[]) {
		this.images = images;
	}

	public getImages() {
		return this.images;
	}

	public setSlide(index: number) {
		this.currentSlide = Math.max(index, 0);
	}

	public getSlide() {
		return this.currentSlide;
	}

	public open() {
		this.isActive = true;
	}

	public close() {
		this.isActive = false;
	}

	public get isOpened() {
		return this.isActive;
	}
}
