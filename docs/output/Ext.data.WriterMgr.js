Ext.data.JsonP.Ext_data_WriterMgr({"mixedInto":[],"static":false,"html_filename":"sencha-touch-debug-w-comments.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Ext.AbstractManager","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"create"},{"static":false,"required":null,"tagname":"method","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"each"},{"static":false,"required":null,"tagname":"method","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"get"},{"static":false,"required":null,"tagname":"method","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"getCount"},{"static":false,"required":null,"tagname":"method","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"isRegistered"},{"static":false,"required":null,"tagname":"method","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"onAvailable"},{"static":false,"required":null,"tagname":"method","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"register"},{"static":false,"required":null,"tagname":"method","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"registerType"},{"static":false,"required":null,"tagname":"method","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"unregister"}],"property":[{"static":false,"required":null,"tagname":"property","owner":"Ext.AbstractManager","protected":false,"deprecated":null,"name":"all"}]},"author":"Ed Spencer","protected":false,"linenr":12154,"subclasses":[],"singleton":false,"alias":null,"deprecated":null,"docauthor":null,"private":true,"superclasses":["Ext.AbstractManager","Ext.data.WriterMgr"],"mixins":[],"name":"Ext.data.WriterMgr","filename":"Ext.ux.Calendar/lib/sencha/sencha-touch-debug-w-comments.js","component":false,"code_type":"assignment","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='docClass'>Ext.AbstractManager</a><div class='subclass '><strong>Ext.data.WriterMgr</strong></div></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Keeps track of all of the registered <a href=\"#!/api/Ext.data.Writer\" rel=\"Ext.data.Writer\" class=\"docClass\">Writers</a></p>\n\n</div><div class='members'><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-all' class='member first-child inherited'><a href='#' class='side not-expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-property-all' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-property-all' class='name not-expandable'>all</a><span> : <a href=\"#!/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a></span></div><div class='description'><div class='short'><p>Contains all of the items currently managed</p>\n</div><div class='long'><p>Contains all of the items currently managed</p>\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-create' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-method-create' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-create' class='name expandable'>create</a>( <span class='pre'>Object config, String defaultType</span> ) : Mixed</div><div class='description'><div class='short'>Creates and returns an instance of whatever this manager manages, based on the supplied type and config object ...</div><div class='long'><p>Creates and returns an instance of whatever this manager manages, based on the supplied type and config object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config object</p>\n</div></li><li><span class='pre'>defaultType</span> : String<div class='sub-desc'><p>If no type is discovered in the config object, we fall back to this type</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The instance of whatever this manager is managing</p>\n</div></li></ul></div></div></div><div id='method-each' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-method-each' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-each' class='name expandable'>each</a>( <span class='pre'>Object fn, Object scope</span> )</div><div class='description'><div class='short'>Executes the specified function once for each item in the collection. ...</div><div class='long'><p>Executes the specified function once for each item in the collection.\nReturning false from the function will cease iteration.</p>\n\n<p>The paramaters passed to the function are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>key</b> : String<p class=\"sub-desc\">The key of the item</p></li>\n<li><b>value</b> : Number<p class=\"sub-desc\">The value of the item</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the collection</p></li>\n</ul></div>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'><p>The function to execute.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope to execute in. Defaults to <tt>this</tt>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-method-get' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-get' class='name expandable'>get</a>( <span class='pre'>String id</span> )</div><div class='description'><div class='short'>Returns a component by id. ...</div><div class='long'><p>Returns a component by id.\nFor additional details see <a href=\"#!/api/Ext.util.MixedCollection-method-get\" rel=\"Ext.util.MixedCollection-method-get\" class=\"docClass\">Ext.util.MixedCollection.get</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>The component id</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'><p>Ext.Component The Component, <code>undefined</code> if not found, or <code>null</code> if a\nClass was found.</p>\n</div></li></ul></div></div></div><div id='method-getCount' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-method-getCount' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-getCount' class='name expandable'>getCount</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the number of items in the collection. ...</div><div class='long'><p>Gets the number of items in the collection.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The number of items in the collection.</p>\n</div></li></ul></div></div></div><div id='method-isRegistered' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-method-isRegistered' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-isRegistered' class='name expandable'>isRegistered</a>( <span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> xtype</span> ) : Boolean</div><div class='description'><div class='short'>Checks if a Component type is registered. ...</div><div class='long'><p>Checks if a Component type is registered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The mnemonic string by which the Component class may be looked up</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the type is registered.</p>\n</div></li></ul></div></div></div><div id='method-onAvailable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-method-onAvailable' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-onAvailable' class='name expandable'>onAvailable</a>( <span class='pre'>String id, Function fn, Object scope</span> )</div><div class='description'><div class='short'>Registers a function that will be called when a Component with the specified id is added to the manager. ...</div><div class='long'><p>Registers a function that will be called when a Component with the specified id is added to the manager. This will happen on instantiation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>The component id</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The callback function</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the Component.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-register' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-method-register' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-register' class='name expandable'>register</a>( <span class='pre'>Mixed item</span> )</div><div class='description'><div class='short'>Registers an item to be managed ...</div><div class='long'><p>Registers an item to be managed</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Mixed<div class='sub-desc'><p>The item to register</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-registerType' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-method-registerType' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-registerType' class='name expandable'>registerType</a>( <span class='pre'>String xtype, Constructor cls</span> )</div><div class='description'><div class='short'>Registers a new Component constructor, keyed by a new\nExt.Component.xtype. ...</div><div class='long'><p>Registers a new Component constructor, keyed by a new\nExt.Component.xtype.</p>\n\n\n<p>Use this method (or its alias <a href=\"#!/api/Ext-method-reg\" rel=\"Ext-method-reg\" class=\"docClass\">Ext.reg</a>) to register new\nsubclasses of <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> so that lazy instantiation may be used when specifying\nchild Components.\nsee <a href=\"#!/api/Ext.Container-property-items\" rel=\"Ext.Container-property-items\" class=\"docClass\">Ext.Container.items</a></p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : String<div class='sub-desc'><p>The mnemonic string by which the Component class may be looked up.</p>\n</div></li><li><span class='pre'>cls</span> : Constructor<div class='sub-desc'><p>The new Component class.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-unregister' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='definedIn docClass'>Ext.AbstractManager</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-AbstractManager-method-unregister' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-unregister' class='name expandable'>unregister</a>( <span class='pre'>Mixed item</span> )</div><div class='description'><div class='short'>Unregisters a component by removing it from this manager ...</div><div class='long'><p>Unregisters a component by removing it from this manager</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Mixed<div class='sub-desc'><p>The item to unregister</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"sencha-touch-debug-w-comments.html#Ext-data-WriterMgr"});