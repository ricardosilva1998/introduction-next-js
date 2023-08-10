import { FC } from "react";
import styles from './button.module.cssn'

interface Button {
    variant: string
}

const Button: FC<Button> = ({variant}) => {
    return <div className={styles.button}>Click</div>
}

// const Button = ({variant}: Button) => {
//     return <div></div>
// }

export default Button