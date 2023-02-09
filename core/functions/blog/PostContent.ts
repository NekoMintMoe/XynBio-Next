import { ContentData } from "@/core/modules/BlogData"
import axios from "axios"

const DataAPI = async (slug: string): Promise<ContentData> => {
    const res = await (await axios.get(`${process.env.DATA_API_URL}/api/blog/${slug}`)).data
    return {
        code: res.code,
        data: {
            link: res.data.link,
            metadata: {
                title: res.data.metadata.title,
                subtitle: res.data.metadata.subtitle,
                date: res.data.metadata.date,
                author: res.data.metadata.author,
                keyword: res.data.metadata.keyword,
                slug: res.data.metadata.slug,
            },
            content: res.data.content,
            activity: {
                comments: res.data.activity.comments,
                likes: res.data.activity.likes,
                shares: res.data.activity.shares,
            }
        }
    }
}

export default DataAPI