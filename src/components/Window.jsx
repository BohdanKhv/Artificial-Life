import './styles/Window.css'

const Window = ({children, title, btnTitle, btnAction, maxWidth}) => {
  return (
    <div className="window" style={{maxWidth: maxWidth+'px'}}>
      <div 
        className="window-title"
      >
        <div className="title-dot-1"/>
        <div className="title-dot-2"/>
        <div className="title-dot-3"/>
        <div className="title">
            <h5>
              {title}
            </h5>
            {btnAction &&
            <div>
              <div className="btn"
                onClick={btnAction}
              >
                {btnTitle}
              </div>
            </div>
            }
        </div>
      </div>
      <div className="window-content">
      {children}
      </div>
    </div>
  )
}

export default Window