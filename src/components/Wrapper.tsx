import classes from "../css/navbar.module.css";

import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
