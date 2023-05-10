import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import ProjectTitle from './project-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const ProjectHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <ProjectTitle>{title}</ProjectTitle>
        <div className="mb-4">
          <CoverImage title={title} src={coverImage} />
        </div>
        <div className="flex justify-between">
          <div className="justify-center">
              <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="flex align-center">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectHeader
