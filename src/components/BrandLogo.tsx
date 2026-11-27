import Image from "next/image";
import Link from "next/link";

export function BrandLogo({ href = "/" }: { href?: string }) {
  const img = (
    <Image
      src="/brand/png/frigotrace-horizontal-300.png"
      alt="FrigoTrace"
      width={160}
      height={40}
      className="h-9 w-auto"
      priority
    />
  );

  if (!href) return img;
  return (
    <Link href={href} className="inline-flex items-center">
      {img}
    </Link>
  );
}