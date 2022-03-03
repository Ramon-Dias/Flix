import React from "react";
import "./Header.css"

export default ({black}) => {
    return (
        <header className={ black ? "black" : ""}>
            <div className="header-logo">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix"/>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User"/>
                </a>
            </div>
        </header>
    )
}
