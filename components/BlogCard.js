import Link from "next/link"

const BlogCard = ({ imageUrl, title, articleUrl, date }) => {
  return (
    <Link href={articleUrl} passHref>
      <div className="flex flex-col rounded-3xl bg-gray-100 shadow-lg mt-0 h-full">
        <div className="flex-shrink-0 w-full h-56 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col flex-grow p-4">
          <h3 className="lg:text-xl font-bold text-black text-left overflow-hidden">
            {title}
          </h3>
          <div className="mt-auto">
            <p className="text-xs lg:text-base text-gray-400 text-left">
              {date}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
