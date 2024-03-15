'use client'

const { ThemeContext } = require("@/context/ThemeContext")
const { useContext } = require("react")

const Theme = ({children}) => {

    const {theme} = useContext(ThemeContext)

    return(           
        <div className={theme !== undefined ? 'container ' + theme : 'container'}>
            <div className='wrapper'>
                {children}
            </div>
        </div>
  )
}

export default Theme