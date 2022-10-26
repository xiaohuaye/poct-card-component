import { IFormulaMenu, IPopoverContentMenuItem } from '../type/formula';
import PopoverContentMenu from './popoverContentMenu';
import { useState } from 'react'

interface IPopoverContentULProps {
  data: IFormulaMenu[]
  menuChange: (s: IPopoverContentMenuItem)=> void;
}

function PopoverContentUL(props: IPopoverContentULProps) {
  const [current, setCurrent] = useState('')
  
  function change(data: IPopoverContentMenuItem) {
    setCurrent(data.value)
    props.menuChange(data)
  }

  const dom = props.data.map(d=>{
    return (
      <PopoverContentMenu 
      data={d} 
      key={d.title}
      current={current}
      change={change}
      />
    )
  })

  return (
    <div style={{border: '1px solid blue' ,flex: 1}}>
     {dom}
    </div>
  )
}

export default PopoverContentUL;