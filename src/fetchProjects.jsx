import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects"
      });

      const projects = response.items.map((item) => {
        const { title, url } = item.fields;
        const image = item?.fields?.image?.fields?.file?.url || "";
        const id = item.sys.id;

        return {id, title, image, url};
      });
      setProjects(projects);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
}

