const delay = (time) => new Promise((resolve)=> {
    setTimeout(()=> resolve(1), time)
})

const getData = async(slug) => {
    const post = await delay(500)
    // const post = await getDataFromCMS(slug)
    return post
}

export default async function BlogPost({params}) {
    const {slug} = params
    const post = await getData(slug)

    // throw new Error('yikes')
    return <div>{post.slug}</div>
}
