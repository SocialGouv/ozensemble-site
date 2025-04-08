"use client"
import React, { Suspense } from "react"
import { MDXRemote } from "next-mdx-remote-client/rsc"
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc"

const components = {
  DownloadButtons: () => null,
}
const options: MDXRemoteOptions = {
  mdxOptions: {
    // ...
  },
  parseFrontmatter: true,
  // scope: {
  //   readingTime: calculateSomeHow(source),
  // },
}

export default function CustomMDX({ source }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote options={options} components={components} source={source} />
    </Suspense>
  )
}
