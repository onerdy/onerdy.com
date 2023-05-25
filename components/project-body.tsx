import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const ProjectBody = ({ content }: Props) => {
  return (
    <div className="max-w-4xl mx-auto text-left">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default ProjectBody
