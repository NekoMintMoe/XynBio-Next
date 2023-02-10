import { ContentData } from "@/core/modules/BlogData"
import { DefaultHeader } from "@/core/modules/Headers"
import axios from "axios"

const DataAPI = async (slug: string): Promise<ContentData> => {
    const res = await (await axios(`${process.env.DATA_API_URL}/api/blog/${slug}`, {
        method: "GET",
        headers: DefaultHeader(),
    })).data
    return {
        code: res.code,
        data: res.data,
    }
}

export default DataAPI