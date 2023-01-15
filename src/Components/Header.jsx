import PropTypes from 'prop-types'
function Header({text, textColor, bgColor}) {
  
  const headerStyle = {
    color: textColor,
    backgroundColor: bgColor,
  } 
  
  return (
    <header style = {headerStyle}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  ) 
}


Header.defaultProps = {
  text: "Feedback UI",
  textColor: 'red',
  bgColor: 'blue'
  
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header