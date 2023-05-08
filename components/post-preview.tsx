import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="bg-black bg-opacity-60 px-6 py-4 m-4 rounded-3xl flex flex-col">
      <div className="text-3xl mb-2">
          {title}          
          {/* <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline hover:decoration-primary"
          >
            {title}
          </Link> */}
      </div>
      <div className="mb-2">
        <CoverImage slug={slug} title={title} src={coverImage}/>
      </div>
      <div className="flex justify-between mb-2">
        <div className="flex items-start">
          <Avatar name={author.name} picture={author.picture} />                
        </div>
        <div className="flex items-center">
          <DateFormatter dateString={date} />
        </div>
      </div>      
      <div className="mb-4">
          {excerpt}
      </div>
      <div className="flex justify-end">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <button className="bg-secondary text-white rounded-3xl px-3 py-2 h-10 w-32 hover:scale-105">Read more...</button>
        </Link>          
      </div>
    </div>
  )
}

export default PostPreview
