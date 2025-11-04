import { useFetchProjects } from "./fetchProjects";

export const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  console.log(projects);

  return (
    <div>Projects</div>
  )
}