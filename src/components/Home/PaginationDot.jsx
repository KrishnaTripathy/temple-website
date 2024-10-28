
const PaginationDot = ({ curPage, maxPage, onPageChange }) => {
  const dots = [];

  for (let i = 0; i < maxPage; i++) {
    dots.push(
      <button
        key={i}
        className={`w-3 h-3 rounded-full mx-1 mt-8 ${i === curPage ? 'bg-[#9f572a]' : 'bg-gray-300'}`}
        onClick={() => onPageChange(i)}
      />
    );
  }

  return (
    <div className="flex justify-center mt-4">
      {dots}
    </div>
  );
};

export default PaginationDot;
