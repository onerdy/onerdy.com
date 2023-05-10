import ProjectPreview from './project-preview'
import type Project from '../interfaces/project'

type Props = {
  projects: Project[]
}

const AllProjects = ({ projects }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 ">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            author={project.author}
            slug={project.slug}
            excerpt={project.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default AllProjects
