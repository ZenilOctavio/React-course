import { useEffect, useRef } from "react"

export function useDebouncer({debouncedFunction, dependency, delay}) {
    const timeoutRef = useRef(null)

    useEffect(() => {
        clearTimeout(timeoutRef?.current)
        timeoutRef.current = setTimeout(() => {
            debouncedFunction(dependency)
        },delay)

    },[dependency])
}