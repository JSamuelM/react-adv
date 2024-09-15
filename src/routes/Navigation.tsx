import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom'
import Logo from '../assets/react.svg'
import { routes } from './routes'
import { Suspense } from 'react'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={Logo} alt="React Logo" />
            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink to={route.path} activeClassName="nav-active" exact>
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                render={() => <route.Component />}
              ></Route>
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  )
}
