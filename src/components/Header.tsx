'use client'

import HeaderLink from "./HeaderLink"
import { delay } from "@/lib/delay"

const Header = async() => {
    await delay(5000)
    return (
        <header>
            Logo
            <div>
                <HeaderLink />
            </div>
        </header>
    )

}

export default Header