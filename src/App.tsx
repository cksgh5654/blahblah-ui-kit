import Pagination from "./components/Pagination";

function App() {
  const handlePageChange = (index: number) => {
    console.log(index);
  };
  return (
    <Pagination total={235} value={0} onPageChange={handlePageChange}>
      <Pagination.Navigator style={{ display: "flex" }}>
        <Pagination.Buttons />
      </Pagination.Navigator>
    </Pagination>
  );
}

export default App;
