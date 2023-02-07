import { PostMetadataStruct } from "./PostMetadataStruct"
import fs from 'fs'
import matter from "gray-matter"

const getPostMetadata = (): PostMetadataStruct[] => {
    const folder = "posts"
    const files = fs.readdirSync(folder)
    const mdPosts = files.filter((file) => file.endsWith(".md"))

    // Get metadata from each post.
    const postMetadata = mdPosts.map((fileName) => {
        const mdContent = fs.readFileSync(`posts/${fileName}`, "utf8")
        const metadata = matter(mdContent)
        return {
            title: metadata.data.title,
            subtitle: metadata.data.subtitle,
            date: metadata.data.date,
            author: metadata.data.author,
            keyword: metadata.data.keyword,
            slug: fileName.replace(".md", "")
        }
    })

    return postMetadata
}

export default getPostMetadata