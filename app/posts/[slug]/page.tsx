import Markdown from 'markdown-to-jsx'
import getPostMetadata from '@/components/GetPostMetadataFunc'
import getPostContent from '@/components/GetPostConetneFunc'

export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostContent = (props: any) => {
    const slug = props.params.slug
    const post = getPostContent(slug)
    return (
        <div>
            <h1>{post.data.title}</h1>
            <Markdown>{post.content}</Markdown>
        </div>
    )
}

export default PostContent;