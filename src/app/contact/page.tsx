import Link from "next/link"
import { useRouter } from "next/router"

export default function MarketingHome() {
    const router = useRouter()
    return (
        <div>
            <h1>Contact</h1>
            <Link href="/">Home</Link>
            <Link href="/blog/dasgdhsafgshd">Post</Link>
            <button onClick={()=> router.push('/')}>Home</button>
        </div>
    )
}