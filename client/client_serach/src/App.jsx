import SearchComponent from "./components/SearchComponent";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          User Search
        </h1>
        <SearchComponent />
      </div>
    </div>
  );
};

export default App;
