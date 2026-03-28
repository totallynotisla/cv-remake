import React, { useState, useMemo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Lightbox, { LightboxAnjeng } from "./Lightbox";
import { Button } from "@/components/ui/button";

type Props = {
	data: {
		src: string;
		alt: string;
	}[];
};

const MAX_DISPLAYED_IMAGES = 9;

export default function Gallery({ data }: Props) {
	// 1. Add state to trigger React re-renders
	const [_, setIsLightboxOpen] = useState(false); //eslint-disable-line @typescript-eslint/no-unused-vars

	const filtered = data;

	// 2. Flatten the images first!
	// This creates a single list of images for the grid so the index 'i' matches the Lightbox index exactly.
	const galleryItems = filtered;

	// 3. Initialize Lightbox Class using the flattened items
	const lb = useMemo(
		() =>
			new LightboxAnjeng(
				galleryItems.map((img) => ({
					src: img.src,
					caption: {
						title: img.alt,
					},
				})),
			),
		[galleryItems],
	);

	// 4. Update Handler to sync Class state + React state
	function handleClick(index: number) {
		lb.setSlide(index);
		lb.open();
		setIsLightboxOpen(true); // Force React to render the open state
	}

	function handleClose() {
		lb.close();
		setIsLightboxOpen(false); // Force React to render the closed state
	}

	return (
		<div className="flex flex-col gap-12">
			<div className="flex flex-col gap-6">
				<div className={cn("grid gap-4 grid-cols-3 max-md:grid-cols-2")}>
					{/* 5. Map over the FLATTENED galleryItems */}
					{galleryItems.slice(0, MAX_DISPLAYED_IMAGES).map((img, i) => (
						<div key={i} className="group/gallery relative flex flex-col gap-4 items-center">
							<div
								className="relative rounded aspect-[46/32] cursor-pointer hover:brightness-50 transition-all duration-300 w-full h-auto overflow-hidden"
								onClick={() => (galleryItems.length >= MAX_DISPLAYED_IMAGES ? (i + 1 == MAX_DISPLAYED_IMAGES ? handleClick(0) : handleClick(i)) : handleClick(i))}
							>
								{galleryItems.length >= MAX_DISPLAYED_IMAGES && (
									<div className="place-items-center hidden group-last/gallery:grid absolute inset-0 place-items bg-black/25 backdrop-blur-md">
										<Button
											variant={"outline"}
											className="border-white max-md:text-xs max-md:px-2 max-md:py-1 text-white hover:!bg-white hover:!text-black group-hover/gallery:underline "
										>
											Click to see more
										</Button>
									</div>
								)}
								<Image
									src={img.src}
									width={480}
									// loading="lazy"
									height={320}
									alt={img.alt}
									className="object-cover w-full h-full"
								/>
							</div>

							<div className="text-sm uppercase tracking-[2px] text-muted-foreground flex flex-col items-center">
								<span className="font-[500]">{img.alt}</span>
							</div>
						</div>
					))}
				</div>

				{/* <Button>SEE ALL</Button> */}
			</div>

			{/* 6. Pass the onClose handler */}
			<Lightbox lightbox={lb} onClose={handleClose} />
		</div>
	);
}
