import _ from 'lodash';
import Actions from 'actions';

// Got this handy-dandy middleware from
// https://codeburst.io/minimal-code-for-redux-async-actions-c47ea85f2141
export const inProgressTypeName = (basicActionName) => `${basicActionName}_IN_PROGRESS`;
export const successTypeName = (basicActionName) => `${basicActionName}_SUCCESS`;
export const errorTypeName = (basicActionName) => `${basicActionName}_ERROR`;

export const asyncMiddleware = store => next => action => {
  const isActionAsync = action.hasOwnProperty('async');
  if (!isActionAsync) {
      return next(action);
  }
  else {
      const {httpMethod, params, type} = action;
      const inProgressType = inProgressTypeName(type);
      //the resolved promise here is to make sure the action fired here comes after firing original action for example:
      //getData => getDataInProgress and not the other way round. hack suggested in redux forums.
      Promise.resolve(1).then(() => store.dispatch({type: inProgressType}));
      httpMethod(...params)
          .then(resultsObj => {
              const successType = successTypeName(type);
              Promise.resolve(1).then(() => store.dispatch({
                  type: successType,
                  ...resultsObj
              }));
          })
          .catch(err => {
              console.log(err);
              const errorType = errorTypeName(type);
              Promise.resolve(1).then(() => store.dispatch({type: errorType, err}));
          });

      return next(action);
  }
};

export const actionsBinder = (...actionNames) => {
  return (dispatch) => {
    return _.reduce(actionNames, (bound, actionName) => {
      var actionCreator = Actions[actionName];
      if (!_.isFunction(actionCreator)) {
        throw new Error(`Unknown action creator: ${actionName}`);
      }

      bound[actionName] = function() {
        return dispatch(actionCreator.apply(Actions, arguments));
      };

       return bound;
    }, {});
  };
}

export default {
  inProgressTypeName,
  successTypeName,
  errorTypeName,
  asyncMiddleware,
  actionsBinder
}
