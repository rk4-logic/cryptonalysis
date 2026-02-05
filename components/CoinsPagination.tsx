'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useRouter } from 'next/navigation';
import { buildPageNumbers, cn, ELLIPSIS } from '@/lib/utils';

const CoinsPagination = ({ currentPage, totalPages, hasMorePages }: any) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/coins?page=${page}`);
  };

  const pageNumbers = buildPageNumbers(currentPage, totalPages);

  return (
    <Pagination id="coins-pagination">
      <PaginationContent className="pagination-content">
        <PaginationItem className="pagination-control prev">
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
          />
        </PaginationItem>

        <div className="pagination-pages flex items-center">
          {pageNumbers.map((page, index) => (
            <PaginationItem key={index}>
              {page === ELLIPSIS ? (
                <span className="px-3 text-gray-400">...</span>
              ) : (
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(Number(page));
                  }}
                  className={cn('cursor-pointer', {
                    'page-link-active bg-primary text-white': currentPage === page,
                  })}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </div>

        <PaginationItem className="pagination-control next">
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (hasMorePages) handlePageChange(currentPage + 1);
            }}
            className={!hasMorePages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CoinsPagination;