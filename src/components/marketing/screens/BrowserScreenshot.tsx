import Image from "next/image";
import { SCREEN_CAPTION, SCREEN_SIZE, type ScreenSlug, screenSrc } from "@/lib/marketing-screens";
import { ScreenshotLightbox } from "@/components/marketing/screens/ScreenshotLightbox";
import { cn } from "@/lib/utils";

type BrowserScreenshotProps = {
  slug: ScreenSlug;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Prioridad de carga para filas bajo el pliegue */
  sizes?: string;
};

export function BrowserScreenshot({
  slug,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 72vw, 860px",
}: BrowserScreenshotProps) {
  const frame = (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        </div>
        <p className="ml-1 truncate text-xs text-slate-500 sm:text-sm">app.frigotrace.es</p>
      </div>
      <div className="bg-slate-100">
        <picture>
          <source type="image/avif" srcSet={screenSrc(slug, "avif")} />
          <Image
            src={screenSrc(slug, "webp")}
            alt={alt}
            width={SCREEN_SIZE.width}
            height={SCREEN_SIZE.height}
            className="h-auto w-full"
            sizes={sizes}
            priority={priority}
          />
        </picture>
      </div>
      <figcaption className="border-t border-slate-100 bg-slate-50 px-3 py-2 text-center text-xs text-slate-500">
        {SCREEN_CAPTION}
      </figcaption>
    </figure>
  );

  return (
    <ScreenshotLightbox slug={slug} alt={alt}>
      {frame}
    </ScreenshotLightbox>
  );
}