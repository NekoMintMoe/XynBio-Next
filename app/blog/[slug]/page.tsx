import PostMetadataFunc from '@/core/functions/blog/PostMetadata'
import PostContentLay from '@/core/layouts/blog/PostContent'
import PostContentFunc from '@/core/functions/blog/PostContent'

export const generateStaticParams = async () => {
    const posts = PostMetadataFunc()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const BlogContent = (props: any) => {
    const postMetadata = PostContentFunc(props.params.slug)
    const postContent = postMetadata.map((metadata) => (
        <PostContentLay key={metadata.slug} {...metadata} />
    ))
    return <div>{postContent}</div>
}

export default BlogContent;