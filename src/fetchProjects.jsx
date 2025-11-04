import { createClient } from "contentful";

const client = createClient({
  space: "8js10d5ihsaq",
  environment: "master",
  accessToken: "ADVRw8ZtGrUx1IIXI_VVI_gLOOYqmKWa3h1NfwQddQA"
});

client.getEntries({
  content_type: "projects"
}).then((response) => console.log(response.items));