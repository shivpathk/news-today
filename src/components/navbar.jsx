import React from 'react'

const navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" ><span className='badge bg-light text-dark fs-3'>NEWS TODAY</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav fs-5 mx-5 px-5 ">
        <li className="nav-item px-2" style={{cursor:"pointer"}}>
          <div className="nav-link " onClick={()=>setCategory("general")}>General</div>
        </li>
        <li className="nav-item px-2" style={{cursor:"pointer"}}>
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item px-2" style={{cursor:"pointer"}}>
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item px-2" style={{cursor:"pointer"}}>
          <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item px-2" style={{cursor:"pointer"}}>
          <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li className="nav-item px-2" style={{cursor:"pointer"}}>
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item px-2" style={{cursor:"pointer"}}>
          <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default navbar