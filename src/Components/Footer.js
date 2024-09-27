import React from 'react';

function Footer(props) {
  return (
    <footer>
    <div className={`card-body bg-${props.mode} mt-5 text-${props.mode === 'light' ? 'dark' : 'white'}` }>
        <div className='text-center py-4'>Designed with passion by <a href="https://github.com/i-am-riya">Riya</a></div>
    </div>
    </footer>
  )
}

export default Footer