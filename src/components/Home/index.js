import React, {PropTypes} from 'react';

import style from './style.css';

const Main = ({onClick}) => {
  return (
    <div>
      <h1 className={style.header}>
        {'React Boilerplate'}
      </h1>
      <button
        className={style.button}
        onClick={onClick}
      >
        {'Test'}
      </button>
    </div>
  )
}

Main.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Main;
