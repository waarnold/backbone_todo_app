this["JST"] = this["JST"] || {};

this["JST"]["header"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<header><div id=\"sidebar_toggle\"></div><h1>"
    + ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"formatDate","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<span class=\"total selected\">"
    + container.escapeExpression(((helper = (helper = helpers.length || (depth0 != null ? depth0.length : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"length","hash":{},"data":data}) : helper)))
    + "</span></h1></header><main><div id=\"add\"><span></span><a href=\"#\">Add new Todo</a></div><div id=\"todos\"></div></main>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "class=\"selected\"";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"header\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "<span></span></span>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.name : depth0),{"name":"formatDate","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.header : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "<span class=\"total\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.todos : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span></div>";
},"useData":true});

this["JST"]["modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"modal_layer\"></div><div id=\"form_modal\"><form><fieldset><dl><dt><label for=\"title\">Title</label></dt><dd><input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Item 1\"></dd><dt><label for=\"day\">Due Date</label></dt><dd><div class='date'><select name=\"day\" id=\"day\"><option>Day</option><option value='01'>1</option><option value='02'>2</option><option value='03'>3</option><option value='04'>4</option><option value='05'>5</option><option value='06'>6</option><option value='07'>7</option><option value='08'>8</option><option value='09'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option></select> / <!----><select name=\"month\" id=\"month\"><option>Month</option><option value='01'>January</option><option value='02'>February</option><option value='03'>March</option><option value='04'>April</option><option value='05'>May</option><option value='06'>June</option><option value='07'>July</option><option value='08'>August</option><option value='09'>September</option><option value='10'>October</option><option value='11'>November</option><option value='12'>December</option></select> / <!----><select name=\"year\" id=\"year\"><option>Year</option><option value='2015'>2015</option><option value='2016'>2016</option><option value='2017'>2017</option><option value='2018'>2018</option><option value='2019'>2019</option><option value='2020'>2020</option><option value='2021'>2021</option><option value='2022'>2022</option><option value='2023'>2023</option><option value='2024'>2024</option><option value='2025'>2025</option></select></div></dd><dt><label for=\"description\">Description</label></dt><dd><textarea name=\"description\" id=\"description\" placeholder=\"Description\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea></dd></dl><div id=\"controls\"><input type=\"submit\" id=\"submit\" value=\"Save\"><button name=\"mark_complete\">Mark as Complete</button></div></fieldset></form></div>";
},"useData":true});

this["JST"]["todo"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "complete";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.dueDate : depth0),{"name":"formatDate","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "";
},"6":function(container,depth0,helpers,partials,data) {
    return "No Due Date";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<td class=\"list_item "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.complete : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><span class=\"box\"></span><span class=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " - "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "</span></td><td class=\"delete\"></td>";
},"useData":true});