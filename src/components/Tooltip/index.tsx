import { FC } from "react"
import { createPortal } from "react-dom"
import { TMedia } from "../../@types/media.type"

type TProps = {
    item: TMedia
    target: any
}
const ToolTip: FC<TProps> = ({target, item}) => {
    console.log('idx', item.id);
    
  const TooltipOverlay = () => {
    return <div className="absolute z-10 text-white p-3 rounded bg-black w-64 h-72"
    style={{
        top: target ? `${target.offsetTop + target.offsetHeight}px` : 0,
        left:  target ? `${target.offsetLeft + target.offsetWidth/2}px` : 0,
        transform: 'translateX(-50%)'
    }}>
    <div className="tooltip-label">click to open the form</div>
  </div>
  }

  const portalDiv = document.getElementById('overlay-root-' + item.id)!;
  
  return (
    <>
      {createPortal(<TooltipOverlay />, portalDiv)}
    </>
  )
}

export default ToolTip