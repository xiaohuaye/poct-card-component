import { IFormulaMenu, IPopoverContentMenuItem } from "../type/formula";

interface IPopoverContentMenuProps {
  data: IFormulaMenu;
  current: string;
  change: (data: IPopoverContentMenuItem) => void;
}

function PopoverContentMenu(props: IPopoverContentMenuProps) {

    function select(e: IPopoverContentMenuItem) {
      props.change(e)
    }

    const dom = props.data.content.map(d=>{
      return (
        <li className={d.label === props.current ? 'current' : ''} onClick={()=>{select(d)}} key={d.label}>
          <em className={d.isMore ? 'more' : ''}  
          style={{maxWidth: '75%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
            {d.description}
          </em>
          <span>{d.label}</span>
        </li>
      )
    })
  
    return (
      <div className="formula_menu">
        <div>{props.data.title}</div>
        <ul>
          {dom}
        </ul>
      </div>
    )
  }

export default PopoverContentMenu;