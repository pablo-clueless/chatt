import { useMemo } from 'react'

export const DOTS = `...`

export const usePagination = (current:number, pageSize:number, siblingCount = 1, total:number) => {
    const range = (start:number, end:number) => {
		const length = end - start + 1
		return Array.from({ length }, (_, index) => index + start)
	}

    const paginationRange = useMemo(() => {
		const totalPage = Math.ceil(total / pageSize)
		const totalPageNumber = siblingCount + 5

		if (totalPageNumber >= totalPage) {
			return range(1, totalPage)
		}

		const leftIndex = Math.max(current - siblingCount, 1)
		const rightIndex = Math.min(current + siblingCount, totalPage)
		const firstIndex = 1
		const lastIndex = totalPage
		const showLeftDots = leftIndex > 2
		const showRightDots = rightIndex < totalPage - 2

		if (!showLeftDots && showRightDots) {
			const leftItemCOunt = 3 + 2 * siblingCount
			const leftRange = range(1, leftItemCOunt)
			return [...leftRange, DOTS, totalPage]
		}

		if (showLeftDots && !showRightDots) {
			const rightItemCount = 3 + 2 * siblingCount
			const rightRange = range(totalPage - rightItemCount + 1, totalPage)
			return [firstIndex, DOTS, ...rightRange]
		}

		if (showLeftDots && showRightDots) {
			const midRange = range(leftIndex, rightIndex)
			return [firstIndex, DOTS, ...midRange, DOTS, lastIndex]
		}
	}, [current, pageSize, siblingCount, total])

    return paginationRange
}