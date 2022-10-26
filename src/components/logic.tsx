import InputAndPopover from './inputAndPopover'
interface ILogicProps {
  activeComponent: string
}

function Logic(props: ILogicProps) {
  if(props.activeComponent !== 'logic') return null;

  return (
    <div>
      <InputAndPopover />
    </div>
  )
}

export default Logic;