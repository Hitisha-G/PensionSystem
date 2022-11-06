import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { log_out } from '../redux/action/userAction';
import './nav.css';
import { OverlayTrigger } from 'react-bootstrap';
// import { Popover } from 'bootstrap';

const Navbar = (props) => {
  const History = useNavigate();
  const user = props.user;
  const log_out = props.log_out;
  console.log(user);
  const [showPopover, setshowPopover] = useState(false);

  useEffect(() => {
    if (user?.type) {

    } else if (!user?.type) {
      History('/register');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);


  const logout = (e) => {
    e.preventDefault();
    log_out();
    History('/register');
  };
  const popoverCard = () => {
    return (
      <div className="model" style={{ background: '#297CC1' }}>
        <div className="model_head">
          {user && (
            <Link to="/register" className="createUser">
              Create New Users
            </Link>
          )}


            <Link to="/sssKitDistributed/list" className="createUser">
             SSS Kits Distributed 
            </Link>
      =
          {user && (
            <button className="logOutBtn" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      
    >
      <div style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position:"fixed",
        top:"0px",
        zIndex:"1000"
      }}>
      
       
      
      </div>
      <nav className="navbar_container">
        <div className="d-flex justify-content-end w-100 ">
          <div className="btnMargin">
            <Link
              to="/"
              className="linkBtn"
              style={{ border: 'none', fontSize: '24px' }}
            > 
             Home
            </Link>
          </div>
          {!user && (
            <Link to="/login" className="login_btn">
              Login
            </Link>
          )}
          {user && (
            <div
              style={{ margin: 'auto 35px auto ' }}
              onClick={() => setshowPopover(!showPopover)}
            >
              <div className="d-flex align-items-center">
                {/* <div className="navImg">
                  {UserDetails?.name && UserDetails?.name[0]?.toUpperCase()}
                </div> */}
                <div className="nav_name">My Team</div>
                <div className="navIcon">
                  <OverlayTrigger
                    show={showPopover}
                    placement="bottom-end"
                    overlay={popoverCard()}
                    trigger="click"
                   rootClose
                  >
                    <>
                      {showPopover ? (
                        <img src="/assets/icons/nav_down_arrow.svg" alt="" />
                      ) : (
                        <img src="/assets/icons/nav_up_arrow.svg" alt="" />
                      )}
                    </>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

const mapStateStore = (stateStore) => {
  return {
    user: stateStore.userState.user,
  };
};

export default connect(mapStateStore, { log_out })(Navbar);
