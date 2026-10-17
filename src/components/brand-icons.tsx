import type { SVGProps } from "react";

/**
 * Brand glyphs that are not part of the Lucide icon set.
 * Drawn inline so no external icon requests are made.
 */

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.2 0-.5.07-.77.37-.27.3-1.02.99-1.02 2.42 0 1.42 1.04 2.8 1.19 2.99.15.2 2.05 3.13 4.97 4.28.69.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.72-.7 1.96-1.38.25-.68.25-1.26.17-1.38-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.53 2 2.06 6.47 2.06 11.98c0 1.76.46 3.42 1.27 4.86L2 22l5.3-1.38a9.9 9.9 0 0 0 4.73 1.2h.01c5.5 0 9.98-4.47 9.98-9.98S17.54 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.81.83-3.04-.19-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.5 3.67-8.17 8.19-8.17 2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 0 1 2.4 5.79c0 4.5-3.67 8.19-8.18 8.19Z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.27 0 .53.04.78.12v-3.2a5.8 5.8 0 0 0-.78-.05 5.8 5.8 0 1 0 5.8 5.8V9.01a7.35 7.35 0 0 0 4.3 1.38v-3.1a4.3 4.3 0 0 1-3.34-1.47Z" />
    </svg>
  );
}

export function GoogleMapsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}
