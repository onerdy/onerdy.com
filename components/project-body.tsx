import DOMPurify from 'dompurify';

type Props = {
  content: string
}

function sanitizeHtml(html: string | null | undefined) {
  return html
    ? DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['span', 'p'],
        ALLOWED_ATTR: ['class'],
      })
    : '';
}

const ProjectBody = ({ content }: Props) => {
  return (
    <div className="max-w-4xl mx-auto text-left">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
      />
    </div>
  )
}

export default ProjectBody
