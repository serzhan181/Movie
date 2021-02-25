import { Link, useLocation } from 'react-router-dom'

export const NavLink = ({
  to,
  className,
  inactiveClassName,
  activeClassName,
  ...rest
}) => {
  const location = useLocation()

  const isActive = location.pathname === to

  const allClassNames = `${className} ${
    isActive ? activeClassName : inactiveClassName
  }`

  return <Link className={allClassNames} to={to} {...rest} />
}
