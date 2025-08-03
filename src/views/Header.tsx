import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full flex items-center justify-between px-6 py-4 bg-[var(--bg)] text-[var(--text)] shadow-md z-50">
      <div className="text-xl font-bold">Multi-Theme Switcher</div>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="p-2 rounded border border-solid themeSelect"
      >
        <option value="theme1" className='option'>Theme 1</option>
        <option value="theme2" className='option'>Theme 2</option>
        <option value="theme3" className='option'>Theme 3</option>
      </select>
    </header>
  );
};

export default Header;