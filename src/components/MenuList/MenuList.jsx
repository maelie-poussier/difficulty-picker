import s from "./style.module.css"
import { MenuListItem } from "../MenuListItem/MenuListItem";

export function MenuList(props) {

    const difficulties = ["Low", "Medium", "High", "Insane"].map((difficulty) => {
      return <MenuListItem onClick={props.onItemClick} difficulty={difficulty} isSelected={props.difficulty === difficulty} />
    })
    return <div className={ s.container }>
        {difficulties}
    </div>
}
