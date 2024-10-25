import Link from "next/link";
import { Icon } from "@/components/common";

export function Footer() {
  return (
    <footer className="flex w-full justify-center border-t bg-stone-300/10">
      <div className="flex w-full max-w-screen-lg items-center justify-between px-4 py-6 text-sm font-light text-stone-500 dark:text-stone-300">
        <p>
          © 2024 block
          <span className="text-orange-600 dark:text-orange-300">
            spot.&nbsp;
          </span>
          All rigts reserved.
        </p>

        <Link
          href="https://vercel.com/"
          className="flex items-center transition-all hover:text-stone-800 dark:text-stone-300 dark:hover:text-white"
        >
          <span>Hosted on&nbsp;</span>
          <Icon icon="vercel" className="h-3 w-3" />
          <span>&nbsp;Vercel</span>
        </Link>
      </div>
    </footer>
  );
}
