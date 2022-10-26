import { Input, Popover  } from 'antd';
import { useState } from 'react'
import { IFormulaMenu, IPopoverContentMenuItem } from '../type/formula';
import PopoverContentUL from './popoverContentUL';

const LOGIN_FUNC_GROUP: IFormulaMenu[] = [{
  title: '逻辑函数',
  content: [
    {
      label: 'OR()',
      description: '或',
      value: 'OR()',
      isMore: false, 

    },
    {
      label: 'NOT()',
      description: '反转真假的结果',
      value: 'NOT()',
      isMore: false, 
    }
  ],
}]

const FORMULA : IFormulaMenu[] = [
  {
    title: '函数',
    content: [
      {
        label: '逻辑函数',
        description: 'OR NOT',
        value: '逻辑函数',
        isMore: true, 
      },
    ],
  }
]

function InputAndPopover() {
  const [IsFocus, setFocusState ] = useState(false)
  const [ rightData, setRightData ] = useState([] as IFormulaMenu[])

  function menuChange(select: IPopoverContentMenuItem, position: 'left'| 'right') {
    if(select.isMore && position === 'left') {
      const selectItem = LOGIN_FUNC_GROUP.find((item)=>{
        return item.title === select.label
      })

      if(!selectItem) {
        console.log('错误的选项', JSON.stringify(select));
        return 
      } 
      setRightData([selectItem])
    }else {
      alert(select.value)
    }
  }

  const content = ()=>{
    return (
      <div style={{border: '1px solid red', display: 'flex' }}>
        <PopoverContentUL key='left' data={FORMULA} menuChange={ (e)=>{menuChange(e, 'left')} }/>
        <PopoverContentUL key='right' data={rightData} menuChange={ (e)=>{menuChange(e, 'right')}}/>
      </div>
    )
  }

  return (
    <Popover content={content}>
      {/* <Input onFocus={()=>{setFocusState(true)}} onBlur={()=>{setFocusState(false)}}/> */}
      <Input />
    </Popover>
  )
}

export default InputAndPopover;