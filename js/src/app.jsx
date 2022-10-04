import { createRoot } from 'react-dom/client';
import ReactComponents from './components/ReactComponents';

const root = createRoot(document.querySelector('#app'));

root.render(<ReactComponents />);
