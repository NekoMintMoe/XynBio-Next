import PostMetadataFunc from '@/core/functions/blog/PostMetadata'
import PostPreviewListLay from '@/core/layouts/blog/PostPreviewList'

const BlogPage = async () => {
    const api = await PostMetadataFunc()
    const postPreviewList = (api.data.map((data) => (
        <PostPreviewListLay key={data.metadata.slug} {...data} />
    )))
    return <div>{postPreviewList}</div>
}

export default BlogPage