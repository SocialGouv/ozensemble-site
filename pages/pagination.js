import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Pagination = ({
  total,
  per_page = 10,
  currentPage = 1,
  onNext = () => {},
  onPrevious = () => {},
}) => {
  return total > 0 ? (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Résultats{" "}
            <span className="font-medium">
              {(currentPage - 1) * per_page + 1}
            </span>{" "}
            à{" "}
            <span className="font-medium">
              {Math.min(total, currentPage * per_page)}
            </span>{" "}
            de <span className="font-medium">{total}</span> résultats
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm ml-3 bg-white"
            aria-label="Pagination"
          >
            <button
              disabled={currentPage <= 1}
              onClick={onPrevious}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
            >
              <IoIosArrowBack className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              {currentPage}
            </span>

            <button
              disabled={currentPage * per_page >= total}
              onClick={onNext}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
            >
              <IoIosArrowForward className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 md:px-6">
      No result
    </div>
  )
}

export default Pagination
