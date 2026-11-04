import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // error aane per state update hogi
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  // error ki detail log karenge
  componentDidCatch(error, info) {
    console.log("error:", error);
    console.log("error info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "red" }}>
          <h3>{this.props.fallback} </h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
