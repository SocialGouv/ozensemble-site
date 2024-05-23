"use client"
import React, { Suspense } from "react"
import { MDXRemote } from "next-mdx-remote-client/rsc"
import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc"
import { ANDROID_URL, IOS_URL } from "~/constants"
import appStorePic from "~/public/images/other/app-store-fr.png"
import googlePlayPic from "~/public/images/other/google-play-fr.png"

const components = {
  DownloadButtons: () => (
    <div className="mt-[70px] mb-1 grid max-w-[200px] sm:max-w-[400px] sm:grid-flow-col gap-6 auto-cols-fr md:w-5/6 m-auto">
      <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">
        <img
          className="object-contain w-full"
          src={googlePlayPic.src}
          alt="télécharger dans Google Play"
        />
      </a>
      <a href={IOS_URL} target="_blank" rel="noopener noreferrer">
        <img
          className="object-contain w-full"
          src={appStorePic.src}
          alt="télécharger dans l'App Store"
        />
      </a>
    </div>
  ),
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
