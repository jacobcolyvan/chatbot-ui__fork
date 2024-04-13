"use client"

import { FC } from "react"
import { MangoSVG } from "../icons/mango-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">
        <MangoSVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="text-3xl tracking-wide">brrk</div>
    </div>
  )
}
