import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <div className="logo-container">
                    <Link className="logo-link" to='/home'>
                        <CrwnLogo className="logo" />
                    </Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>Shop</Link>

                </div>
            </div>

            <Outlet />
        </Fragment>
    )
}

export default Navigation;