import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalItems = 400;
  const pageSize = 15;
  // Generate dummy data for 400 items
  const dummyData = Array.from(
    { length: totalItems },
    (_, i) => `Item ${i + 1}`
  );

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  // Calculate items for the current page
  const startIdx = currentPage * pageSize;
  const endIdx = startIdx + pageSize;
  const currentPageItems = dummyData.slice(startIdx, endIdx);

  return (
    <>
      <Pagination
        total={totalItems}
        value={currentPage}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        blockSize={15}
      >
        <Pagination.Buttons />
        <Pagination.Navigator />
      </Pagination>
      ;
      <div>
        <h2>Current Page Items:</h2>
        <ul>
          {currentPageItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
