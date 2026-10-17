export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is generated from static, controlled data only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
