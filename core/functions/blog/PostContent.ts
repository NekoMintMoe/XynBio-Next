import { PostMetadata } from "@/core/modules/PostMetadata"
import fs from 'fs'
import matter from "gray-matter"

const PostContant = (slug: string): PostMetadata[] => {
    // Get metadata from each post.
    const mdSlug = [slug]
    const postMetadata = mdSlug.map((slug) => {
        const mdContent = fs.readFileSync(`posts/blog/${slug}.md`, "utf8")
        const metadata = matter(mdContent)
        return {
            title: metadata.data.title,
            subtitle: metadata.data.subtitle,
            date: metadata.data.date,
            author: metadata.data.author,
            keyword: metadata.data.keyword,
            slug: slug,
            content: metadata.content
        }
    })

    return postMetadata
}

export default PostContant