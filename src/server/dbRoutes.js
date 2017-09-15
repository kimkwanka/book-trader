import db from './db';
import serverStore from './serverStore';

const authenticatedOnly = (req, res, next) => {
  if (req.isAuthenticated()) { return next(); }
  return res.status(401).send('Authentication required');
};

const dbRoutes = (app) => {
  app.post('/db/update', authenticatedOnly, (req, res) => {
    const action = req.body;
    // console.log(serverStore.getState().collection);
    serverStore.dispatch(action);
    db.update(serverStore.getState().collection, (doc) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Saved:', doc);
      }
      res.send(doc.data);
    });
  });
};

export default dbRoutes;
