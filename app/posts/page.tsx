import PostMetadataFunc from '@/module/functions/PostMetadata'
import PostPreviewListLay from '@/module/layouts/PostPreviewList'

const PostPage = () => {
    const postMetadata = PostMetadataFunc()
    const postPreviewList = postMetadata.map((metadata) => (
        <PostPreviewListLay key={metadata.slug} {...metadata} />
    ))
    return <div>{postPreviewList}</div>
}

export default PostPage