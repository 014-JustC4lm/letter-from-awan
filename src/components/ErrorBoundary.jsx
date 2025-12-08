import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="bg-white/5 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Something went wrong 😞</h2>
            <p className="text-sm text-gray-200 mb-4">Open console (F12) to see error details.</p>
            <pre className="text-xs text-left max-w-sm overflow-auto text-red-300">
              {String(this.state.error)}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
