import { RefObject, useEffect, useState } from 'react'

interface Args extends IntersectionObserverInit {
	freezeOnVisible?: boolean
}

export const useIntersectionObserver = (
	elementRef:RefObject<Element>,
	{freezeOnVisible = false, root = null, rootMargin = '0%', threshold = 0}: Args
): IntersectionObserverEntry | undefined => {
    const [entry, setEntry] = useState<IntersectionObserverEntry>()
	const frozen = entry && entry.isIntersecting && freezeOnVisible

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => setEntry(entry)

	useEffect(() => {
		const node = elementRef?.current
		const hasIOsupport = !!window.IntersectionObserver

		if (!hasIOsupport || !node || frozen) return
		const observerParams = { root, rootMargin, threshold }
		const observer = new IntersectionObserver(updateEntry, observerParams)

		observer.observe(node)
		return () => observer.disconnect()
	}, [root, rootMargin, frozen, elementRef, threshold])

	return entry
}