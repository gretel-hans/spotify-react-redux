import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../../redux/actions';

const SidebarVertical=(props)=>{
  const dispatch=useDispatch()

    return(
        <>
        <div className="col-2">
          <Nav
            className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="nav-container">
              
                <Link to='/'className="navbar-brand"><img
                  src="/media/logo/Spotify_Logo.png"
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                /> </Link>
                
              
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      
                            <Link to='/'className="navbar-brand"><i className="fas fa-home fa-lg"></i>&nbsp; Home </Link>
                            
                      
                    </li>
                    <li>
                      <a className="nav-item nav-link" href="void(0)"
                        ><i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                        Library</a
                      >
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          value={props.searched}
                          onChange={(e)=>{
                            props.changeSearch(e.target.value)
                          }}
                        />
                        <div
                          className="input-group-append"
                          //style="margin-bottom: 4%"
                        >
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            id="button-addon1"
                            onClick={()=>{
                              props.setCont(props.cont+1)
                              dispatch(updateSearch(props.searched))
                            }}
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-btn">
              <button className="btn signup-btn" type="button">Sign Up</button>
              <button className="btn login-btn" type="button">Login</button>
              <a href="void(0)">Cookie Policy</a> |
              <a href="void(0)"> Privacy</a>
            </div>
          </Nav>
        </div>
        </>
        
    )
}

export default SidebarVertical