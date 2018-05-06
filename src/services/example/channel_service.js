
var customActions = {
  calc: {method: 'POST', url: 'channel/calc'}
};
let $resource=Vue.resource('channel{/id}',customActions);
export default $resource;
