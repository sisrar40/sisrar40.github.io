export function Button({ className = '', disabled = false, children, ...props }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`inline-flex items-center justify-center transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
