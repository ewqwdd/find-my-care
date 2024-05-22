'use client'

import { useMaxMediaQuery } from "@/lib/hooks/useMediaQuery"
import { ReactNode } from "react"

interface MediaMaxWrapperProps {
    query: number
    children?: ReactNode
}

export default function MediaMaxWrapper({query, children}: MediaMaxWrapperProps) {
  
  const isVisible = useMaxMediaQuery(query)
  console.log(isVisible)
  
  if (isVisible) return children

  return null
}
