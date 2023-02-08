import PostMetadataFunc from '@/core/functions/blog/PostMetadata'
import PostPreviewListLay from '@/core/layouts/blog/PostPreviewList'

const BlogPage = () => {
    const postMetadata = PostMetadataFunc()
    const postPreviewList = postMetadata.map((metadata) => (
        <PostPreviewListLay key={metadata.slug} {...metadata} />
    ))
    return <div>{postPreviewList}</div>
}

export default BlogPage