this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"row clearfix header\">\n      <div class=\"col-md-12 column\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push(" \n    <div class=\"row clearfix header\">\n        <div class=\"col-md-2 column\">\n        </div>\n        <div class=\"col-md-8 column\">\n          ");
  stack1 = helpers['if'].call(depth0, "logged", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"col-md-2 column\">\n          <div class=\"state\">    \n            <div class=\"row cdate\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "currentDate", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <div class=\"row auth\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth", options) : helperMissing.call(depth0, "render", "auth", options))));
  data.buffer.push("\n            </div>\n          </div>\n        </div>\n    </div>\n    ");
  stack1 = helpers['if'].call(depth0, "logged", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <div class='current-title'>\n                <h1>");
  stack1 = helpers._triageMustache.call(depth0, "currentTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n              </div>\n              <div class='parent-title'>\n                <h2>");
  stack1 = helpers._triageMustache.call(depth0, "parentTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n              </div>\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n              <div class='current-title'>\n                <h1>Zvooq Report</h1>\n              </div>\n          ");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <div class=\"row clearfix\">\n          <div class=\"col-md-2 column\">\n              ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "menu", options) : helperMissing.call(depth0, "render", "menu", options))));
  data.buffer.push("\n          </div>\n          <div class=\"col-md-8 column\">\n              ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n          <div class=\"col-md-2 column\">\n          </div>\n      </div>\n    ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n      <h1>Please, log in.</h1>\n    ");
  }

  data.buffer.push("<div class=\"container\">\n  ");
  stack1 = helpers['if'].call(depth0, "fullscrean", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["auth"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  INgrooves <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">logout</a>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signIn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">sign in</a>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "logged", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["contracts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["contracts-index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r    <div>");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | ");
  stack1 = helpers._triageMustache.call(depth0, "start_date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | ");
  stack1 = helpers._triageMustache.call(depth0, "load_pro_rata", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "action", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r  ");
  return buffer;
  }

  data.buffer.push("<div>\r  ");
  stack1 = helpers.each.call(depth0, "contracts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["contracts-new"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div>\r  <div>\r    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("contract.load_pro_rata")
  },hashTypes:{'valueBinding': "STRING"},hashContexts:{'valueBinding': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r  </div>\r  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["dashboard"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Contracts");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Distributors");
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contracts", options) : helperMissing.call(depth0, "link-to", "contracts", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "distributors", options) : helperMissing.call(depth0, "link-to", "distributors", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Zvooq");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Statistics & Analysis");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Reports");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Content managment");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Dashboard");
  }

  data.buffer.push("<div class=\"main\">\n    <p>Dear Partner!</p>\n\n    <p> We welcome you on ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" online statistics page. </p>\n\n    <p>\n        Here you will be able to\n    <ul>\n        <li>view online statistics and analysis on ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats", options) : helperMissing.call(depth0, "link-to", "stats", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>examine monthly and quarterly reports on ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "reports", options) : helperMissing.call(depth0, "link-to", "reports", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>manage your content and releases on ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "content", options) : helperMissing.call(depth0, "link-to", "content", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li>make your personal settings on ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "dashboard", options) : helperMissing.call(depth0, "link-to", "dashboard", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n    </p>\n\n    <p>\n        In case you have any requests, comments and questions our support team is always at your disposal at\n    </p>\n    <p>\n        Sincerely yours, </br>\n        Zvooq.\n    </p>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["table"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("      ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "tools", options) : helperMissing.call(depth0, "partial", "tools", options))));
  data.buffer.push("\n      \n      ");
  data.buffer.push(escapeExpression((helper = helpers['table-component'] || (depth0 && depth0['table-component']),options={hash:{
    'hasFooter': (false),
    'columnsBinding': ("columns"),
    'contentBinding': ("content")
  },hashTypes:{'hasFooter': "BOOLEAN",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasFooter': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "table-component", options))));
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["tools"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'id': ("rows-num"),
    'placeholder': ("number of rows"),
    'value': ("rowsNum"),
    'action': ("refresh")
  },hashTypes:{'type': "STRING",'id': "STRING",'placeholder': "STRING",'value': "ID",'action': "STRING"},hashContexts:{'type': depth0,'id': depth0,'placeholder': depth0,'value': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["menu-branch"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers.each.call(depth0, "children", {hash:{
    'itemController': ("menuNode"),
    'itemViewClass': ("App.MenuNodeView")
  },hashTypes:{'itemController': "STRING",'itemViewClass': "STRING"},hashContexts:{'itemController': depth0,'itemViewClass': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["menu-node"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <span ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': (":toggle-icon children.length::leaf")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers['if'].call(depth0, "isExpanded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </span>\n  <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"text\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n     &#x25BC;\n    ");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n     &#x25B6;\n    ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <a ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'href': ("link")
  },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"text\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "menuBranch", "content", options) : helperMissing.call(depth0, "render", "menuBranch", "content", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "children.length", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isExpanded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["menu"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <div>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class=\"main-menu\">\n  ");
  stack1 = helpers.each.call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r    ");
  stack1 = helpers['if'].call(depth0, "currencyShowed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r    ");
  stack1 = helpers['if'].call(depth0, "filterShowed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r      <div class=\"field\">\r        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("App.currencyController"),
    'selectionBinding': ("selectedCurrency"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content.id"),
    'prompt': ("Change currency"),
    'class': ("select")
  },hashTypes:{'contentBinding': "STRING",'selectionBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'prompt': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'selectionBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'prompt': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r      </div>\r    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r      <div class=\"field\">\r        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("filters"),
    'selectionBinding': ("selectedFilter"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content.id"),
    'prompt': ("Add criteria for analysis"),
    'class': ("select")
  },hashTypes:{'contentBinding': "STRING",'selectionBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'prompt': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'selectionBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'prompt': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r      </div>\r    ");
  return buffer;
  }

  data.buffer.push("<div class=\"tools\">\r  <div class=\"dates-range\">\r    <div class=\"field\">\r      <label>From:</label> ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DateField", {hash:{
    'value': ("_from"),
    'class': ("input")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>To:</label> ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.DateField", {hash:{
    'value': ("_to"),
    'class': ("input")
  },hashTypes:{'value': "ID",'class': "STRING"},hashContexts:{'value': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r    </div>\r  </div>\r  ");
  stack1 = helpers['if'].call(depth0, "notIndex", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \r</div>\r\r");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Sales & Royalties");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Subscription");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Ad-supported");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Downloads");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Service");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("User");
  }

  data.buffer.push("  <div class=\"row clearfix stats-menu\">\r    <div class=\"col-md-4 column\">\r      <div class=\"row clearfix\">\r        <div class=\"col-md-12 column h-item\">\r          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.sales", options) : helperMissing.call(depth0, "link-to", "stats.sales", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("     \r        </div>\r      </div>\r      <div class=\"row clearfix\">\r        <div class=\"col-md-12 column\">\r          <div class=\"row clearfix\">\r            <div class=\"col-md-4 column v-item\">\r          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.sales.subscription", options) : helperMissing.call(depth0, "link-to", "stats.sales.subscription", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r            </div>\r            <div class=\"col-md-4 column v-item\">\r          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.sales.advertising", options) : helperMissing.call(depth0, "link-to", "stats.sales.advertising", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r            </div>\r            <div class=\"col-md-4 column v-item\">\r          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.sales.downloads", options) : helperMissing.call(depth0, "link-to", "stats.sales.downloads", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r            </div>\r          </div>\r        </div>\r      </div>\r    </div>\r    <div class=\"col-md-4 column\">\r      <div class=\"row clearfix\">\r        <div class=\"col-md-12 column h-item\">\r          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.service", options) : helperMissing.call(depth0, "link-to", "stats.service", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        </div>\r      </div>\r      <div class=\"row clearfix\">\r        <div class=\"col-md-12 column\">\r          <div class=\"row clearfix\">\r            <div class=\"col-md-4 column v-item\">\r              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.service.subscription", options) : helperMissing.call(depth0, "link-to", "stats.service.subscription", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r            </div>\r            <div class=\"col-md-4 column v-item\">\r              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.service.advertising", options) : helperMissing.call(depth0, "link-to", "stats.service.advertising", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r            </div>\r            <div class=\"col-md-4 column v-item\">\r              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.service.downloads", options) : helperMissing.call(depth0, "link-to", "stats.service.downloads", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r            </div>\r          </div>\r        </div>\r      </div>\r    </div>\r    <div class=\"col-md-4 column\">\r      <div class=\"row clearfix\">\r        <div class=\"col-md-12 column h-item\">\r          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.user", options) : helperMissing.call(depth0, "link-to", "stats.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        </div>\r      </div>\r      <div class=\"row clearfix\">\r        <div class=\"col-md-12 column\">\r          <div class=\"row clearfix\">\r            <div class=\"col-md-4 column v-item\">\r              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.user.subscription", options) : helperMissing.call(depth0, "link-to", "stats.user.subscription", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("        \r            </div>\r            <div class=\"col-md-4 column v-item\">\r              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.user.advertising", options) : helperMissing.call(depth0, "link-to", "stats.user.advertising", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r            </div>\r            <div class=\"col-md-4 column v-item\">\r              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "stats.user.downloads", options) : helperMissing.call(depth0, "link-to", "stats.user.downloads", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r            </div>\r          </div>\r        </div>\r      </div>\r    </div>\r  </div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-sales-advertising"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Gross Revenue,");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Total Royalties,");
  }

  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBase", "gross", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r      <label ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("baseChecked.gross:checked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Gross Revenue, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("gross")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBase", "royalty", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r      <label ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("baseChecked.royalty:checked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Total Royalties, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("royalty")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>\r    <div class=\"field\">\r      <label>Number of active users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("activeUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>   \r    <div class=\"field\">\r      <label>Number of streams</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("streams")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>\r        ");
  stack1 = helpers['if'].call(depth0, "baseChecked.gross", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        ");
  stack1 = helpers['if'].call(depth0, "baseChecked.royalty", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (excl. VAT)\r      </label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['sales-advertising-chart'] || (depth0 && depth0['sales-advertising-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sales-advertising-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-sales-downloads"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("Gross Revenue, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (excl. VAT)");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("Total Royalties,");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (excl. VAT)");
  return buffer;
  }

  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBase", "gross", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r      <label ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("baseChecked.gross:checked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Gross Revenue, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("gross")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBase", "royalty", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r      <label ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("baseChecked.royalty:checked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Total Royalties, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("royalty")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>\r    <div class=\"field\">\r      <label>Number of downloads</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("loads")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>\r    <div class=\"field\">\r      <label>Number of active users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("activeUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>   \r  </div>\r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>\r        ");
  stack1 = helpers['if'].call(depth0, "baseChecked.gross", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        ");
  stack1 = helpers['if'].call(depth0, "baseChecked.royalty", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r      </label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['sales-downloads-chart'] || (depth0 && depth0['sales-downloads-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sales-downloads-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-sales"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Gross Revenue,");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Net Revenue,");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Total Royalties,");
  }

  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBase", "gross", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r      <label ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("baseChecked.gross:checked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Gross Revenue, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("gross")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBase", "net", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("> \r      <label ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("baseChecked.net:checked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Net Revenue, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("net")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBase", "royalty", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r      <label ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("baseChecked.royalty:checked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Total Royalties, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("royalty")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>   \r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>\r        ");
  stack1 = helpers['if'].call(depth0, "baseChecked.gross", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        ");
  stack1 = helpers['if'].call(depth0, "baseChecked.net", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        ");
  stack1 = helpers['if'].call(depth0, "baseChecked.royalty", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (excl. VAT)\r      </label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['sales-chart'] || (depth0 && depth0['sales-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sales-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-sales-subscription"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Gross Revenue,");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Total Royalties,");
  }

  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBase", "gross", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r      <label ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("baseChecked.gross:checked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Gross Revenue, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("gross")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleBase", "royalty", {hash:{
    'on': ("click")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\r      <label ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("baseChecked.royalty:checked")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">Total Royalties, ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("royalty")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>\r    <div class=\"field\">\r      <label>Number of subscribers</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("subs")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>   \r    <div class=\"field\">\r      <label>Number of streams</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("streams")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>\r    <div class=\"field\">\r      <label>Number of downloads</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("loads")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>\r        ");
  stack1 = helpers['if'].call(depth0, "baseChecked.gross", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        ");
  stack1 = helpers['if'].call(depth0, "baseChecked.royalty", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r        ");
  stack1 = helpers._triageMustache.call(depth0, "currency.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" (excl. VAT)\r      </label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['sales-subscription-chart'] || (depth0 && depth0['sales-subscription-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "sales-subscription-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-service-advertising"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\">\r      <label>Number of active users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("users")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>Number of streams</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("stream")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>Hours of streams</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("streamlen")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\"> \r      <label>Royalties, USD</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("royalty")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>Number of streams</label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['service-advertising-chart'] || (depth0 && depth0['service-advertising-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "service-advertising-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-service-downloads"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\">\r      <label>Number of active users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("users")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\"> \r      <label>Number of downloads</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("load")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\"> \r      <label>Royalties, USD</br>(excl. VAT)</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("royalty")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>Number of downloads</label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['service-downloads-chart'] || (depth0 && depth0['service-downloads-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "service-downloads-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-service"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\">\r      <label>Number of streams</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("stream")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("App.streamTypeController"),
    'selectionBinding': ("selectedStreamType"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content.id"),
    'prompt': ("Chose out of"),
    'class': ("select")
  },hashTypes:{'contentBinding': "STRING",'selectionBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'prompt': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'selectionBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'prompt': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r    </div>\r    <div class=\"field\"> \r      <label>Number of downloads</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("load")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("App.loadTypeController"),
    'selectionBinding': ("selectedLoadType"),
    'optionLabelPath': ("content.name"),
    'optionValuePath': ("content.id"),
    'prompt': ("Chose out of"),
    'class': ("select")
  },hashTypes:{'contentBinding': "STRING",'selectionBinding': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'prompt': "STRING",'class': "STRING"},hashContexts:{'contentBinding': depth0,'selectionBinding': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'prompt': depth0,'class': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>Number of streams</label>\r    </div>\r    <div class=\"axis-caption right\">\r      <label>Number of downloads</label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['service-chart'] || (depth0 && depth0['service-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "service-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-service-subscription"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\">\r      <label>Number of subscribers</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("sub")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>Number of streams</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("stream")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>Hours of streams</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("streamlen")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\"> \r      <label>Number of downloads</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("load")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\"> \r      <label>Royalties</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("royalty")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>Number of subscribers</label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['service-subscription-chart'] || (depth0 && depth0['service-subscription-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "service-subscription-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-table"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("      ");
  data.buffer.push(escapeExpression((helper = helpers['table-component'] || (depth0 && depth0['table-component']),options={hash:{
    'hasFooter': (false),
    'numRow': (20),
    'columnsBinding': ("columns"),
    'contentBinding': ("cnt")
  },hashTypes:{'hasFooter': "BOOLEAN",'numRow': "INTEGER",'columnsBinding': "STRING",'contentBinding': "STRING"},hashContexts:{'hasFooter': depth0,'numRow': depth0,'columnsBinding': depth0,'contentBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "table-component", options))));
  data.buffer.push("\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-user-advertising"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\">\r      <label>Number of active users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("activeUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>Number of new users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>User engagement, %</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("engagement")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\"> \r      <label>Lifetime value</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("lifetime")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>Active users</label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['user-advertising-chart'] || (depth0 && depth0['user-advertising-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-advertising-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-user-downloads"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\">\r      <label>Number of active users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("activeUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>Number of new users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>User engagement, %</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("engagement")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\"> \r      <label>Lifetime value</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("lifetime")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>Active users</label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['user-downloads-chart'] || (depth0 && depth0['user-downloads-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-downloads-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-user"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\">\r      <label>Number of active users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("activeUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>Number of new users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>User engagement, %</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("engagement")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\"> \r      <label>Lifetime value</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("lifetime")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>Active users</label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['user-chart'] || (depth0 && depth0['user-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["stats-user-subscription"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"chart\">\r  <div class=\"details\">\r    <div class=\"field\">\r      <label>Number of active users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("activeUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>Number of new users</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("newUsers")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\">\r      <label>User engagement, %</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("engagement")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r    <div class=\"field\"> \r      <label>Lifetime value</label> \r      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("lifetime")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push(" \r    </div>\r  </div>\r  \r  <div class=\"chart-container\">\r    <div class=\"axis-caption\">\r      <label>Active users</label>\r    </div>\r    ");
  data.buffer.push(escapeExpression((helper = helpers['user-subscription-chart'] || (depth0 && depth0['user-subscription-chart']),options={hash:{
    'lineData': ("chart"),
    'selectedInterval': ("interval"),
    'action': ("didChartClick")
  },hashTypes:{'lineData': "ID",'selectedInterval': "ID",'action': "STRING"},hashContexts:{'lineData': depth0,'selectedInterval': depth0,'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-subscription-chart", options))));
  data.buffer.push("\r  </div>\r</div>\r");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["streams"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <li ");
  data.buffer.push(escapeExpression((helper = helpers['bind-attr'] || (depth0 && depth0['bind-attr']),options={hash:{
    'class': ("isCompleted:completed isEditing:editing")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n        ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['edit-todo'] || (depth0 && depth0['edit-todo']),options={hash:{
    'class': ("edit"),
    'value': ("title"),
    'focus-out': ("acceptChanges"),
    'insert-newline': ("acceptChanges")
  },hashTypes:{'class': "STRING",'value': "ID",'focus-out': "STRING",'insert-newline': "STRING"},hashContexts:{'class': depth0,'value': depth0,'focus-out': depth0,'insert-newline': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "edit-todo", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("isCompleted"),
    'class': ("toggle")
  },hashTypes:{'type': "STRING",'checked': "ID",'class': "STRING"},hashContexts:{'type': depth0,'checked': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <label ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editTodo", {hash:{
    'on': ("doubleClick")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</label><button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeTodo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"destroy\"></button>\n        ");
  return buffer;
  }

  data.buffer.push("      <ul id=\"todo-list\">\n        ");
  stack1 = helpers.each.call(depth0, {hash:{
    'itemController': ("todo")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n");
  return buffer;
  
});