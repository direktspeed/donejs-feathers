import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './page-auth.less!';
import template from './page-auth.stache!';

export const ViewModel = DefineMap.extend({<% if(enableSignup){ %>
  subpage: {}, // bound to the subpage in the AppState.
<% } %><% if(providers.includes('local')){ %>  session: '*',
<% } %>  isOAuthRoute: {
    get(){
      return this.subpage === 'success' || this.subpage === 'failure';
    }
  }
});

export default Component.extend({
  tag: 'page-auth',
  ViewModel,
  template
});
