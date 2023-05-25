import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import ProjectBody from '../../components/project-body'
import ProjectHeader from '../../components/project-header'
import { getProjectBySlug, getAllProjects } from '../../lib/project-api'
import ProjectTitle from '../../components/project-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type ProjectType from '../../interfaces/project'

type Props = {
  project: ProjectType
  moreProjects: ProjectType[]
}

export default function Project({ project, moreProjects }: Props) {
  const router = useRouter()
  const title = `${project.title}`
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
      <Container>
        {router.isFallback ? (
          <ProjectTitle>Loading…</ProjectTitle>
        ) : (
          <>
            <article className="mb-32 bg-black bg-opacity-60 p-6 m-4 rounded-3xl">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <ProjectHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
              />
              <ProjectBody content={project.content} />
            </article>
          </>
        )}
      </Container>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}
