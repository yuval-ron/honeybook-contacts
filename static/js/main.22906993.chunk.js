(window["webpackJsonphoneybook-contacts"]=window["webpackJsonphoneybook-contacts"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),i=(a(14),a(1)),s=a(2),l=a(4),u=a(3),m=a(5),h=a(8),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"navbar-container"},c.a.createElement("div",{className:"app-logo"},"Honeybook Contacts"))}}]),t}(n.Component),p=(a(17),function(){return c.a.createElement("div",{id:"loading-container"},c.a.createElement("span",null,"Loading"),c.a.createElement("span",{className:"point"},"."),c.a.createElement("span",{className:"point"},"."),c.a.createElement("span",{className:"point"},"."))}),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.contact,t=e.profile_image,a=e.name,n=e.company_name,r=e.email,o=e.icon,i=e.job,s=e.phone,l={backgroundImage:"url(".concat(t,")")},u={backgroundImage:"url(".concat(o,")")};return c.a.createElement("div",{className:"contact-item-container"},c.a.createElement("div",{className:"profile-picture",style:l}),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"icon",style:u}),c.a.createElement("div",{className:"fullname"},a),c.a.createElement("div",{className:"job-details"},c.a.createElement("div",{className:"job-title"},i),i&&n&&c.a.createElement("div",{className:"separator"}),c.a.createElement("div",{className:"company-name"},"@",n)),c.a.createElement("div",{className:"more-details"},c.a.createElement("div",{className:"phone"},"Phone number: ",s),c.a.createElement("div",{className:"email"},r))))}}]),t}(n.Component),b=(a(18),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.contacts;return c.a.createElement("div",{id:"contacts-list-container"},e.map(function(e){return c.a.createElement(v,{key:e.email,contact:e})}))}}]),t}(n.Component)),f=(a(19),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isInputVisible:!1},a.handleButtonClick=function(){var e=a.state.isInputVisible;a.setState({isInputVisible:!e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchQuery,a=e.handleSearchQueryChange,n=this.state.isInputVisible;return c.a.createElement("div",{id:"search-container"},c.a.createElement("div",{className:"input-container ".concat(n&&"visible")},c.a.createElement("input",{type:"text",placeholder:"Enter your search",onChange:a,value:t})),c.a.createElement("div",{className:"search-button",onClick:this.handleButtonClick},c.a.createElement("img",{className:"icon",alt:"",src:"search-icon.svg"})))}}]),t}(n.Component)),y=(a(20),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={filteredContacts:null,searchQuery:""},a.debouncedFilterContacts=Object(h.debounce)(function(e){var t=a.contacts.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())});a.setState({filteredContacts:t})},500),a.handleSearchQueryChange=function(e){var t=e.target.value;a.setState({searchQuery:t}),a.debouncedFilterContacts(t)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://candidate-test.herokuapp.com/contacts").then(function(e){return e.json()}).then(function(t){e.contacts=t,e.setState({filteredContacts:t})})}},{key:"render",value:function(){var e=this.state,t=e.filteredContacts,a=e.searchQuery;return c.a.createElement("div",{className:"App"},c.a.createElement(d,null),t?c.a.createElement(b,{contacts:t}):c.a.createElement(p,null),c.a.createElement(f,{searchQuery:a,handleSearchQueryChange:this.handleSearchQueryChange}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.22906993.chunk.js.map