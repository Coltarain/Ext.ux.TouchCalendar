Ext.data.JsonP.Ext_data_PolymorphicAssociation({"mixedInto":[],"static":false,"html_filename":"sencha-touch-debug-w-comments.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Ext.data.Association","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.Association","protected":false,"deprecated":null,"name":"associatedModel"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.Association","protected":false,"deprecated":null,"name":"ownerModel"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.Association","protected":false,"deprecated":null,"name":"primaryKey"}],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.data.Association","protected":false,"deprecated":null,"name":"constructor"}],"property":[{"static":false,"required":null,"tagname":"property","owner":"Ext.data.Association","protected":false,"deprecated":null,"name":"associatedName"},{"static":false,"required":null,"tagname":"property","owner":"Ext.data.Association","protected":false,"deprecated":null,"name":"ownerName"}]},"author":"Ed Spencer","protected":false,"linenr":8478,"subclasses":[],"singleton":false,"alias":null,"deprecated":null,"docauthor":null,"private":true,"superclasses":["Ext.data.Association","Ext.data.PolymorphicAssociation"],"mixins":[],"name":"Ext.data.PolymorphicAssociation","filename":"Ext.ux.Calendar/lib/sencha/sencha-touch-debug-w-comments.js","component":false,"code_type":"assignment","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.data.Association' rel='Ext.data.Association' class='docClass'>Ext.data.Association</a><div class='subclass '><strong>Ext.data.PolymorphicAssociation</strong></div></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-associatedModel' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Association' rel='Ext.data.Association' class='definedIn docClass'>Ext.data.Association</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-cfg-associatedModel' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Association-cfg-associatedModel' class='name expandable'>associatedModel</a><span> : String</span></div><div class='description'><div class='short'>The string name of the model that is being associated with. ...</div><div class='long'><p>The string name of the model that is being associated with. Required</p>\n</div></div></div><div id='cfg-ownerModel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Association' rel='Ext.data.Association' class='definedIn docClass'>Ext.data.Association</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-cfg-ownerModel' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Association-cfg-ownerModel' class='name expandable'>ownerModel</a><span> : String</span></div><div class='description'><div class='short'>The string name of the model that owns the association. ...</div><div class='long'><p>The string name of the model that owns the association. Required</p>\n</div></div></div><div id='cfg-primaryKey' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Association' rel='Ext.data.Association' class='definedIn docClass'>Ext.data.Association</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-cfg-primaryKey' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Association-cfg-primaryKey' class='name expandable'>primaryKey</a><span> : String</span></div><div class='description'><div class='short'>The name of the primary key on the associated model. ...</div><div class='long'><p>The name of the primary key on the associated model. Defaults to 'id'</p>\n<p>Defaults to: <code>&quot;id&quot;</code></p></div></div></div></div></div><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-associatedName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Association' rel='Ext.data.Association' class='definedIn docClass'>Ext.data.Association</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-property-associatedName' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Association-property-associatedName' class='name expandable'>associatedName</a><span> : String</span></div><div class='description'><div class='short'>The name of the model is on the other end of the association (e.g. ...</div><div class='long'><p>The name of the model is on the other end of the association (e.g. if a User model hasMany Orders, this is 'Order')</p>\n</div></div></div><div id='property-ownerName' class='member  inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Association' rel='Ext.data.Association' class='definedIn docClass'>Ext.data.Association</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-property-ownerName' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Association-property-ownerName' class='name not-expandable'>ownerName</a><span> : String</span></div><div class='description'><div class='short'><p>The name of the model that 'owns' the association</p>\n</div><div class='long'><p>The name of the model that 'owns' the association</p>\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Association' rel='Ext.data.Association' class='definedIn docClass'>Ext.data.Association</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Association-method-constructor' target='_blank' class='viewSource'>view source</a></div><strong class='constructor-signature'>new</strong><a href='#!/api/Ext.data.Association-method-constructor' class='name expandable'>Ext.data.PolymorphicAssociation</a>( <span class='pre'>Object config</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Optional config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"sencha-touch-debug-w-comments.html#Ext-data-PolymorphicAssociation"});