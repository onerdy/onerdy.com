import markdownStyles from './markdown-styles.module.css'
import DOMPurify from 'isomorphic-dompurify'

type Props = {
  content: string
}

function sanitizeHtml(html: string | null | undefined) {
  return html ? DOMPurify.sanitize(html) : ''
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-4xl mx-auto text-left">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
      />
    </div>
  )
}

export default PostBody
