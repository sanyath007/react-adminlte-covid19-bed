import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import routes from '../../routes';
import AppHeader from '../MainHeader';
import AppSidebar from '../MainSidebar';
import AppFooter from '../MainFooter';
import ContentHeader from '../ContentHeader';
import { addBodyClass, removeBodyClass } from '../../utils';

const MainLayout = () => {
  const location = useLocation();

  // Set body class
  useEffect(() => {
    if (location.pathname === '/') {
      removeBodyClass('login-page');

      addBodyClass('sidebar-mini');
      addBodyClass('layout-fixed');
    }
  }, []);

  return (
    <div className="wrapper">
      <AppHeader />

      <AppSidebar />

      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">

        {/* Content Header (Page header) */}
        <ContentHeader location={location} />

        {/* Main content */}
        <section className="content">

          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component routes={route.routes} {...props} />}
                />
              ) : (null);
            })}
            <Redirect to="/404" />
          </Switch>

        </section>

      </div>

      <AppFooter />

    </div>
  );
};

export default MainLayout;
