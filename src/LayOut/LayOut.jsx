/** @format */

import { Outlet } from 'react-router-dom';
import { Navigation } from '../Components/Navigation';

export const LayOut = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
