import matter from 'gray-matter'
import fs from 'fs'

const PostContent = (slug: string) => {
    const folder = 'posts/blog'
    const file = `${folder}/${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const metadata = matter(content)
    return metadata
}

export default PostContent