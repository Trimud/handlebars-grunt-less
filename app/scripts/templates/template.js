this["JST"] = this["JST"] || {};

this["JST"]["app/templates/hbform.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <div class=\"alert formInfo\">Моля попълнете формата:</div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.errors : depth0),{"name":"unless","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    return "        <div class=\"alert formSuccess\">\r\n            Формата е попълнена успешно. Благодаря!\r\n        </div>\r\n        <div id=\"formData\"></div>\r\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "    <fieldset id=\"step1\">\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"title","Обръщение",{"name":"label","hash":{},"data":data}))
    + "\r\n            "
    + alias2((helpers.select || (depth0 && depth0.select) || alias1).call(depth0,"title",(depth0 != null ? depth0.titles : depth0),((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.title : stack1),{"name":"select","hash":{"name":"Обръщение"},"data":data}))
    + "\r\n        </div>\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"name","Име",{"name":"label","hash":{"class":"required"},"data":data}))
    + "\r\n            "
    + alias2((helpers.input || (depth0 && depth0.input) || alias1).call(depth0,"Име","name",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.name : stack1),"text",{"name":"input","hash":{},"data":data}))
    + "\r\n        </div>\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"surname","Фамилия",{"name":"label","hash":{},"data":data}))
    + "\r\n            "
    + alias2((helpers.input || (depth0 && depth0.input) || alias1).call(depth0,"Фамилия","surname",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.surname : stack1),"text",{"name":"input","hash":{},"data":data}))
    + "\r\n        </div>\r\n    </fieldset>\r\n    <fieldset id=\"step2\">\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"username","Потребителко име",{"name":"label","hash":{"class":"required"},"data":data}))
    + "\r\n            "
    + alias2((helpers.input || (depth0 && depth0.input) || alias1).call(depth0,"Потребителко име","username",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.username : stack1),"text",{"name":"input","hash":{},"data":data}))
    + "\r\n        </div>\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"email","E-mail",{"name":"label","hash":{"class":"required"},"data":data}))
    + "\r\n            "
    + alias2((helpers.input || (depth0 && depth0.input) || alias1).call(depth0,"E-mail","email",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.email : stack1),"email",{"name":"input","hash":{},"data":data}))
    + "\r\n        </div>\r\n    </fieldset>\r\n    <fieldset id=\"step3\">\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"telephone","Телефонен номер",{"name":"label","hash":{"class":"required"},"data":data}))
    + "\r\n            "
    + alias2((helpers.input || (depth0 && depth0.input) || alias1).call(depth0,"Телефонен номер","telephone",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.telephone : stack1),"tel",{"name":"input","hash":{"maxlength":"10"},"data":data}))
    + "\r\n        </div>\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"birthdate","Рожден ден",{"name":"label","hash":{},"data":data}))
    + "\r\n            "
    + alias2((helpers.input || (depth0 && depth0.input) || alias1).call(depth0,"Рожден ден","birthdate",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.birthdate : stack1),"text",{"name":"input","hash":{},"data":data}))
    + "\r\n        </div>\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"food","Любима храна",{"name":"label","hash":{},"data":data}))
    + "\r\n            "
    + alias2((helpers.select || (depth0 && depth0.select) || alias1).call(depth0,"food",(depth0 != null ? depth0.foods : depth0),((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.food : stack1),{"name":"select","hash":{"name":"Любима храна"},"data":data}))
    + "\r\n        </div>\r\n    </fieldset>\r\n    <fieldset id=\"step4\">\r\n        <div class=\"formRow\">\r\n";
  stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(options={"name":"label","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias3 ? helper.call(depth0,options) : helper));
  if (!helpers.label) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"","Пиете ли бира?",{"name":"label","hash":{},"data":data}))
    + "\r\n";
  stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(options={"name":"label","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias3 ? helper.call(depth0,options) : helper));
  if (!helpers.label) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(options={"name":"label","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias3 ? helper.call(depth0,options) : helper));
  if (!helpers.label) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\r\n    </fieldset>\r\n    <fieldset id=\"step5\">\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"bio","За Вас",{"name":"label","hash":{"class":"required"},"data":data}))
    + "\r\n            "
    + alias2((helpers.textarea || (depth0 && depth0.textarea) || alias1).call(depth0,"bio",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.bio : stack1),{"name":"textarea","hash":{"name":"За Вас"},"data":data}))
    + "\r\n        </div>\r\n        <div class=\"formRow\">\r\n            "
    + alias2((helpers.label || (depth0 && depth0.label) || alias1).call(depth0,"projects","Брой проекти",{"name":"label","hash":{},"data":data}))
    + "\r\n            "
    + alias2((helpers.input || (depth0 && depth0.input) || alias1).call(depth0,"Брой проекти","projects",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.projects : stack1),"number",{"name":"input","hash":{},"data":data}))
    + "\r\n        </div>\r\n    </fieldset>\r\n\r\n    <input type=\"submit\" value=\"Изпрати\" />\r\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "                "
    + this.escapeExpression((helpers.checkbox || (depth0 && depth0.checkbox) || helpers.helperMissing).call(depth0,"employed","yes",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.employed : stack1),{"name":"checkbox","hash":{"name":"Работите ли?"},"data":data}))
    + "\r\n                Работите ли?\r\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "                "
    + this.escapeExpression((helpers.radio || (depth0 && depth0.radio) || helpers.helperMissing).call(depth0,"drinksBeer","yes",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.drinksBeer : stack1),{"name":"radio","hash":{"name":"Пиете ли бира?"},"data":data}))
    + "\r\n                Да\r\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return "                "
    + this.escapeExpression((helpers.radio || (depth0 && depth0.radio) || helpers.helperMissing).call(depth0,"drinksBeer","no",((stack1 = (depth0 != null ? depth0.person : depth0)) != null ? stack1.drinksBeer : stack1),{"name":"radio","hash":{"name":"Пиете ли бира?"},"data":data}))
    + "\r\n                Не\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.submitted : depth0),{"name":"unless","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.submitted : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.form || (depth0 && depth0.form) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.url : depth0),{"name":"form","hash":{"id":"multipage"},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});