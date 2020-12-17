import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h3 style={{ color: "var(--background)", textAlign: "center" }}>
          Something went wrong fetching our instagram feed{" "}
          <span role="img" aria-label="sad face emoji">
            😔
          </span>
        </h3>
      );
    }

    return this.props.children;
  }
}
