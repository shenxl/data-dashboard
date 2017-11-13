import dva from 'dva';
import createHistory from 'history/createBrowserHistory';

import 'moment/locale/zh-cn';
import models from './models';
import './polyfill';
import './g2';
// import { browserHistory } from 'dva/router';
import './index.less';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model move to router
models.forEach((m) => {
  app.model(m);
});

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
