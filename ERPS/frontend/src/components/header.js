import React from "react";

function Header(){
    return (
            
                <nav className="navbar navbar-expand-lg bg-light">
                <div className="container" style={{backgroundColor:"#4F310E"}}>
                <table width={"100%"}><tr><center>
                        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <td  style={{backgroundColor:'#4F310E', padding:"20px"}}><a className="nav-link active" aria-current="page"  href="/admin/all-employee" style={{color:"white"}}>ALL EMPLOYEES </a></td>
                        <td style={{backgroundColor:'#4F310E' ,padding:"20px"}}><a className="nav-link" href="/admin/add-employee" style={{color:"white"}}> ADD EMPLOYEE </a></td>
                        <td style={{backgroundColor:'#4F310E',padding:"20px"}}><a className="nav-link" href="/admin/mark-attendance" style={{color:"white"}}>MARK ATTENDANCE </a></td>
                         <td style={{backgroundColor:'#4F310E'}}><a className="nav-link" href="/admin/all-attendance" style={{color:"white"}}>VIEW   ATTENDANCE</a></td>
                      
                    </ul>
                    </div></center></tr></table>
        </div>
        </nav>
    )
}

export default Header;