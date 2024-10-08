import { useSelector } from 'react-redux';
import router from './routes';
import { clsx } from 'clsx';
import { RootState } from './store/store';
const App: React.FC = () => {
  const theme  = useSelector((state: RootState) => state.client.theme);

  const themeDark = 'bg-[#333] text-[#fff]';
  const themeLight = 'bg-[#fff] text-[#333]';

  return (
    <div
      className={clsx(theme == 'light' ? themeDark : themeLight, 'h-[100vh]')}
    >
      {router}
    </div>
  );
};

export default App;
