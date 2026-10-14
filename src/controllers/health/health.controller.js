import { sequelize } from '../../models/index.js';
import { sendSuccess, sendFailure } from '../../utils/response.js';

const healthCheck = async (__req, res) => {
  try {
    await sequelize.authenticate();
    return sendSuccess(
      //response
      res,
      //data
      {
        database: 'connected',
        // testing: 'text-added-for-testing'
      }
      //meta
      // { status: 'text-added-for-testing' }
      //status- not added, default is 200
    );
  } catch (error) {
    console.error('Database health check failed:', error);
    return sendFailure(
      res,
      {
        code: 503,
        message: 'Database connection is unavailable',
        details: null,
      },
      503
    );
  }
};

export default healthCheck;
