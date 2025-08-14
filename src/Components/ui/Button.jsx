import React from "react";

const Button = React.forwardRef(
  (
    {
      children,
      variant = "default",
      size = "default",
      loading = false,
      icon = null, // pass JSX <svg> or emoji
      iconPosition = "left",
      fullWidth = false,
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    // Simple variant styles
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      outline: "border border-gray-300 hover:bg-gray-100",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      ghost: "hover:bg-gray-100",
      link: "text-blue-600 underline hover:text-blue-800",
      success: "bg-green-600 text-white hover:bg-green-700",
      warning: "bg-yellow-500 text-black hover:bg-yellow-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
    };

    // Simple size styles
    const sizes = {
      default: "h-10 px-4 text-sm",
      sm: "h-9 px-3 text-sm",
      lg: "h-11 px-6 text-base",
      icon: "h-10 w-10 p-0",
      xs: "h-8 px-2 text-xs",
      xl: "h-12 px-8 text-lg",
    };

    const LoadingSpinner = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 
          5.29A7.96 7.96 0 014 12H0c0 3.04 1.14 
          5.82 3 7.94l3-2.65z"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center rounded-md font-medium
          transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none
          ${variants[variant] || variants.default}
          ${sizes[size] || sizes.default}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
