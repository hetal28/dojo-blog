import { Link, useLocation } from "react-router-dom"


export default function Breadcrumbs() {
    const location = useLocation();

    let currentLink = "";
    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== '')

    const breadCrumbs = crumbs.map(crumb => {
        currentLink = currentLink + `/${crumb}`

        return (
            <div className="crumb">
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })

  return (
    <div className="breadcrumbs">{breadCrumbs}</div>
  )
}
