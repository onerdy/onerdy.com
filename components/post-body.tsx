import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}


//prose comes from tailwind/typography and affects markdown files
const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-4xl mx-auto text-justify prose prose-invert prose-p:text-white prose-a:text-white prose-a:underline prose-a:decoration-secondary prose-a:decoration-2 hover:prose-a:text-secondary">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
