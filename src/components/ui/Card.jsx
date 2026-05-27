export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#050505]/20 shadow-2xl backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = '', children }) {
  return <div className={className}>{children}</div>;
}

export function CardTitle({ className = '', children }) {
  return <h3 className={className}>{children}</h3>;
}

export function CardContent({ className = '', children }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ className = '', children }) {
  return <div className={className}>{children}</div>;
}
