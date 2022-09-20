import Sidebar from '../Sidebar';
import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className='tags top-tags'>&lt;body&gt;</span>

        {/* The Outlet component enables nested UI to be visible when child routes are rendered. */}
        <Outlet />

        <span className='tags bottom-tags'>
          &lt;body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}

export default Layout;