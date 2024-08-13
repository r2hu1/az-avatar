"use client"

import { useEffect, useState } from "react";

export default function Page() {
  const [host, setHost] = useState("");
  useEffect(() => {
    setHost(location.host);
  }, []);
  return (
    <main className="sm:grid place-items-center">
      <div className="p-6 max-w-2xl">
        <h1 className="text-xl font-medium">Instant avatar for your next project</h1>
        <p className="text-gray-500 text-base">Generate an customized avatar with a url for free!</p>
        <div className="flex mt-3">
          <img src="/api/avatar?text=A&height=100&width=100&bgColor=yellow&textColor=black" className="h-14 w-14 rounded-full" />
          <img src="/api/avatar/?text=B&height=100&width=100&bgColor=red&textColor=black" className="h-14 w-14 rounded-full -ml-3" />
          <img src="/api/avatar/?text=C&height=100&width=100&bgColor=blue&textColor=black" className="h-14 w-14 rounded-full -ml-3" />
        </div>
        <div className="p-2 mt-4 mb-2 rounded-md border-gray-600 border">
          <p className="text-sm text-gray-400">
            https://{host}/api/avatar?text={"<"}text{">"}&textColor={"<"}textcolor{">"}&fontSize={"<"}fontsize{">"}&bgColor={"<"}bgcolor{">"}&height{"<"}height{">"}&width={"<"}width{">"}
          </p>
        </div>
        <div className="mt-8">
          <p className="text-base text-gray-500">
            There are many things you can customize including text, textColor, bgColor, height, width, fontSize.
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-medium">Text</h2>
            <p className="text-base text-gray-500">
              The text that will be displayed on the avatar. For example, "R" or "ChatGPT".
              <br />
              <strong>Useage:</strong> <code>?text=R</code>
            </p>
          </div>
          <div className="mt-2">
            <h2 className="text-xl font-medium">TextColor</h2>
            <p className="text-base text-gray-500">
              The color of the text in hexadecimal format (e.g., "ffffff" for white).
              <br />
              <strong>Useage:</strong> <code>?textColor=ffffff</code>
            </p>
          </div>
          <div className="mt-2">
            <h2 className="text-xl font-medium">FontSize</h2>
            <p className="text-base text-gray-500">
              The size of the text in pixels (e.g., "40" for 40px).
              <br />
              <strong>Useage:</strong> <code>?fontSize=40</code>
            </p>
          </div>
          <div className="mt-2">
            <h2 className="text-xl font-medium">BgColor</h2>
            <p className="text-base text-gray-500">
              The background color of the avatar in hexadecimal format (e.g., "0000ff" for blue).
              <br />
              <strong>Useage:</strong> <code>?bgColor=0000ff</code>
            </p>
          </div>
          <div className="mt-2">
            <h2 className="text-xl font-medium">Height</h2>
            <p className="text-base text-gray-500">
              The height of the avatar in pixels (e.g., "100" for 100px).
              <br />
              <strong>Useage:</strong> <code>?height=100</code>
            </p>
          </div>
          <div className="mt-2">
            <h2 className="text-xl font-medium">Width</h2>
            <p className="text-base text-gray-500">
              The width of the avatar in pixels (e.g., "100" for 100px).
              <br />
              <strong>Useage:</strong> <code>?width=100</code>
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          <a href="https://github.com/r2hu1/az-avatar" className="flex items-center bg-none border border-gray-300 h-10 text-sm text-gray-300 px-4 rounded-xl">Github</a>
          <a href="https://github.com/r2hu1/az-avatar" className="flex items-center bg-none border border-gray-300 h-10 text-sm text-gray-300 px-4 rounded-xl">Star</a>
        </div>
      </div>
    </main>
  )
}