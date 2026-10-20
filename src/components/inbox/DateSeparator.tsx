export function DateSeparator({ label }: { label: string }) {
  return (
    <div className="my-3 flex justify-center">
      <span className="rounded-md bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-gray-600 shadow-sm">
        {label}
      </span>
    </div>
  );
}

// This component is used to separate messages in the inbox by date. It takes a `label` prop, which is the text to display in the separator. The separator is styled with a light background and rounded corners, and it is centered horizontally within its container.
// functionally, it is a simple presentational component that enhances the readability of the message list by clearly indicating the transition between different dates.
// functionally, it is a simple presentational component that enhances the readability of the message list by clearly indicating the transition between different dates. 
// className="my-3 flex justify-center" centers the separator horizontally and adds vertical spacing. The inner span has a light background, rounded corners, padding, and text styling to make it visually distinct.