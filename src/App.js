import ErrorBoundary from "./components/ErrorBoundary";
import Homepage from "./screen/Homepage";

const App = () => {
  return (
    <ErrorBoundary>
      <Homepage />
    </ErrorBoundary>
  );
};

export default App;
