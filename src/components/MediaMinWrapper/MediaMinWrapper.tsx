'use client'

import { useMinMediaQuery } from "@/lib/hooks/useMediaQuery"
import { ReactNode } from "react"

interface MediaMinWrapperProps {
    query: number
    children?: ReactNode
}

export default function MediaMinWrapper({query, children}: MediaMinWrapperProps) {
  
  const isVisible = useMinMediaQuery(query)
  
  if (isVisible) return children

  return null
}
