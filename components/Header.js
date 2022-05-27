import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={ headerStyles.title }>
        <span>WebDev</span> News
      </h1>
      <p className={ headerStyles.description }>Keep up to date with the latest web dev news</p>


      {/* <style jsx>
        {`
          .title {
            color: ${false ? 'red' : 'blue'}
          }
        `}
      </style> */}
    </div>
  )
}

export default Header
