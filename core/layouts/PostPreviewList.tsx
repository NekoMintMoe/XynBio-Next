import Link from 'next/link'
import PostMetadataFunc from '@/core/functions/PostMetadata'

const PostPreviewList = (props: PostMetadataFunc) => {
    return <div>
        <Link href={`/posts/${props.slug}`}>
            <h2>{props.title}</h2>
        </Link>
        <p>Subtitle: {props.subtitle}</p>
        <p>Date: {props.date} Author: {props.author}</p>
    </div>
}

export default PostPreviewList