import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[50dvh] grow gap-4">
            <h1 className="text-4xl font-bold">
                Page Not Found - <span className="text-primary">404</span>
            </h1>
            <div className="text-xl">Resource Not Found</div>
            <Link href="/" title="home page">
                <Button>Back to home</Button>
            </Link>
        </main>
    );
}
