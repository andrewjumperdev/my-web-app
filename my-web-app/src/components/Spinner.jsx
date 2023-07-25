import React from 'react'

const Spinner = () => {
  return (
    <div className="container__spinner container">
    <div className="row">
      <div className="col d-flex align-center">
          <div className="spinner-grow text-primary m-2" role="status">
              <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-primary m-2" role="status">
              <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-primary m-2" role="status">
              <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-primary m-2" role="status">
              <span className="visually-hidden">Loading...</span>
           </div>
           <div className="spinner-grow text-primary m-2" role="status">
              <span className="visually-hidden">Loading...</span>
           </div>
      </div>
    </div>
  </div>
  )
}

export default Spinner