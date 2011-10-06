Ext.data.JsonP.Ext_ComponentQuery({"mixedInto":[],"static":false,"html_filename":"ext-all-debug.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Object","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":["Ext.ComponentManager"],"members":{"css_var":[],"css_mixin":[],"cfg":[],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.ComponentQuery","protected":false,"deprecated":null,"name":"is"},{"static":false,"required":null,"tagname":"method","owner":"Ext.ComponentQuery","protected":false,"deprecated":null,"name":"query"}],"property":[]},"xtype":null,"author":null,"protected":false,"linenr":14345,"subclasses":[],"singleton":true,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":[],"mixins":[],"name":"Ext.ComponentQuery","filename":"Ext.ux.Calendar/docs/extjs/ext-all-debug.js","component":false,"code_type":"ext_define","html":"<div><div class='doc-contents'><p>Provides searching of Components within <a href=\"#!/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> (globally) or a specific\nExt.container.Container on the document with a similar syntax to a CSS selector.</p>\n\n<p>Components can be retrieved by using their <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">xtype</a> with an optional . prefix</p>\n\n<ul>\n<li><code>component</code> or <code>.component</code></li>\n<li><code>gridpanel</code> or <code>.gridpanel</code></li>\n</ul>\n\n\n<p>An itemId or id must be prefixed with a #</p>\n\n<ul>\n<li><code>#myContainer</code></li>\n</ul>\n\n\n<p>Attributes must be wrapped in brackets</p>\n\n<ul>\n<li><code>component[autoScroll]</code></li>\n<li><code>panel[title=\"Test\"]</code></li>\n</ul>\n\n\n<p>Member expressions from candidate Components may be tested. If the expression returns a <em>truthy</em> value,\nthe candidate Component will be included in the query:</p>\n\n<pre><code>var disabledFields = myFormPanel.query(\"{isDisabled()}\");\n</code></pre>\n\n<p>Pseudo classes may be used to filter results in the same way as in <a href=\"#!/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a>:</p>\n\n<pre><code>// Function receives array and returns a filtered array.\nExt.ComponentQuery.pseudos.invalid = function(items) {\n    var i = 0, l = items.length, c, result = [];\n    for (; i &lt; l; i++) {\n        if (!(c = items[i]).isValid()) {\n            result.push(c);\n        }\n    }\n    return result;\n};\n\nvar invalidFields = myFormPanel.query('field:invalid');\nif (invalidFields.length) {\n    invalidFields[0].getEl().scrollIntoView(myFormPanel.body);\n    for (var i = 0, l = invalidFields.length; i &lt; l; i++) {\n        invalidFields[i].getEl().frame(\"red\");\n    }\n}\n</code></pre>\n\n<p>Default pseudos include:</p>\n\n<ul>\n<li>not</li>\n</ul>\n\n\n<p>Queries return an array of components.\nHere are some example queries.</p>\n\n<pre><code>// retrieve all Ext.Panels in the document by xtype\nvar panelsArray = Ext.ComponentQuery.query('panel');\n\n// retrieve all Ext.Panels within the container with an id myCt\nvar panelsWithinmyCt = Ext.ComponentQuery.query('#myCt panel');\n\n// retrieve all direct children which are Ext.Panels within myCt\nvar directChildPanel = Ext.ComponentQuery.query('#myCt &gt; panel');\n\n// retrieve all grids and trees\nvar gridsAndTrees = Ext.ComponentQuery.query('gridpanel, treepanel');\n</code></pre>\n\n<p>For easy access to queries based from a particular Container see the Ext.container.Container.query,\nExt.container.Container.down and Ext.container.Container.child methods. Also see\n<a href=\"#!/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">Ext.Component.up</a>.</p>\n</div><div class='members'><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-is' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ComponentQuery' rel='Ext.ComponentQuery' class='definedIn docClass'>Ext.ComponentQuery</a><br/><a href='source/ext-all-debug.html#Ext-ComponentQuery-method-is' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ComponentQuery-method-is' class='name expandable'>is</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> component, String selector</span> ) : Boolean</div><div class='description'><div class='short'>Tests whether the passed Component matches the selector string. ...</div><div class='long'><p>Tests whether the passed Component matches the selector string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component to test</p>\n</div></li><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>The selector string to test against.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the Component matches the selector.</p>\n</div></li></ul></div></div></div><div id='method-query' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ComponentQuery' rel='Ext.ComponentQuery' class='definedIn docClass'>Ext.ComponentQuery</a><br/><a href='source/ext-all-debug.html#Ext-ComponentQuery-method-query' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.ComponentQuery-method-query' class='name expandable'>query</a>( <span class='pre'>String selector, Ext.container.Container root</span> ) : [Ext.Component]</div><div class='description'><div class='short'>Returns an array of matched Components from within the passed root object. ...</div><div class='long'><p>Returns an array of matched Components from within the passed root object.</p>\n\n<p>This method filters returned Components in a similar way to how CSS selector based DOM\nqueries work using a textual selector string.</p>\n\n<p>See class summary for details.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>The selector string to filter returned Components</p>\n</div></li><li><span class='pre'>root</span> : Ext.container.Container<div class='sub-desc'><p>The Container within which to perform the query.\nIf omitted, all Components within the document are included in the search.</p>\n\n<p>This parameter may also be an array of Components to filter according to the selector.</p></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>[Ext.Component]</span><div class='sub-desc'><p>The matched Components.</p>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"ext-all-debug.html#Ext-ComponentQuery"});