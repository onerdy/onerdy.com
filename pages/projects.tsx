import Container from '../components/container'
import { getAllProjects } from '../lib/project-api'
import Head from 'next/head'
import Project from '../interfaces/project'
import AllProjects from '../components/all-projects'

type Props = {
  allProjects: Project[]
}

export default function Index({ allProjects }: Props) {

  return (
    <>
        <Head>
          <title>{`onerdy.com | projects`}</title>
        </Head>
        <Container>
          <AllProjects projects={allProjects} />
        </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allProjects },
  }
}