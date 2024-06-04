/** @format */

import { useNavigate } from 'react-router-dom';
import LogoImg from '../logo192.png';

const logoImg = {
    width:'40px',
}

export const Logo = () => {
  const navigate = useNavigate()

  const handleToHome = () => {
    navigate('/React_helper')
  }

  return <img src={LogoImg} style={logoImg} onClick={handleToHome}/>;
};
