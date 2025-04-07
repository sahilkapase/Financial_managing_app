import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold gradient-title mb-4">
        <Image
          src="/page-not-found.png"
          alt="Description of image"
          width={800}
          height={800}
        />
      </h1>

      <p className="text-gray-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}