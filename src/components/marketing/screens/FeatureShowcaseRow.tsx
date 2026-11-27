import type { FeatureShowcase } from "@/lib/marketing-home-content";
import { BrowserScreenshot } from "@/components/marketing/screens/BrowserScreenshot";
import { cn } from "@/lib/utils";

export function FeatureShowcaseRow({ block }: { block: FeatureShowcase }) {
  const imageOnRight = Boolean(block.imageOnRight);

  return (
    <article className="grid gap-8 lg:grid-cols-5 lg:items-center lg:gap-10">
      <div className={cn("lg:col-span-3", imageOnRight && "lg:order-2")}>
        <BrowserScreenshot slug={block.slug} alt={block.alt} sizes="(max-width: 1024px) 100vw, 60vw" />
      </div>
      <div className={cn("lg:col-span-2", imageOnRight && "lg:order-1")}>
        <h3 className="text-2xl font-semibold text-ft-ink">{block.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{block.text}</p>
        {block.futureNotice ? (
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-950">
            {block.futureNotice}
          </p>
        ) : null}
      </div>
    </article>
  );
}