Ext.data.JsonP.Ext_data_JsonWriter({"mixedInto":[],"static":false,"html_filename":"sencha-touch-debug-w-comments.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Ext.data.Writer","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.JsonWriter","protected":false,"deprecated":null,"name":"encode"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.JsonWriter","protected":false,"deprecated":null,"name":"root"}],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.data.Writer","protected":false,"deprecated":null,"name":"constructor"},{"static":false,"required":null,"tagname":"method","owner":"Ext.data.Writer","protected":false,"deprecated":null,"name":"getRecordData"},{"static":false,"required":null,"tagname":"method","owner":"Ext.data.Writer","protected":false,"deprecated":null,"name":"write"}],"property":[]},"author":"Ed Spencer","protected":false,"linenr":15879,"subclasses":[],"singleton":false,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":["Ext.data.Writer","Ext.data.JsonWriter"],"mixins":[],"name":"Ext.data.JsonWriter","filename":"Ext.ux.Calendar/lib/sencha/sencha-touch-debug-w-comments.js","component":false,"code_type":"assignment","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.data.Writer' rel='Ext.data.Writer' class='docClass'>Ext.data.Writer</a><div class='subclass '><strong>Ext.data.JsonWriter</strong></div></div></pre><div class='doc-contents'><p>Writer that outputs model data in JSON format</p>\n\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-encode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonWriter' rel='Ext.data.JsonWriter' class='definedIn docClass'>Ext.data.JsonWriter</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonWriter-cfg-encode' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.JsonWriter-cfg-encode' class='name expandable'>encode</a><span> : Boolean</span></div><div class='description'><div class='short'>True to use Ext.encode() on the data before sending. ...</div><div class='long'><p>True to use Ext.encode() on the data before sending. Defaults to <tt>false</tt>.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-root' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonWriter' rel='Ext.data.JsonWriter' class='definedIn docClass'>Ext.data.JsonWriter</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-JsonWriter-cfg-root' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.JsonWriter-cfg-root' class='name expandable'>root</a><span> : String</span></div><div class='description'><div class='short'>The key under which the records in this Writer will be placed. ...</div><div class='long'><p>The key under which the records in this Writer will be placed. Defaults to 'records'.\nExample generated request:</p>\n\n<pre><code>{'records': [{name: 'my record'}, {name: 'another record'}]}\n</code></pre>\n\n<p>Defaults to: <code>&quot;records&quot;</code></p></div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Writer' rel='Ext.data.Writer' class='definedIn docClass'>Ext.data.Writer</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Writer-method-constructor' target='_blank' class='viewSource'>view source</a></div><strong class='constructor-signature'>new</strong><a href='#!/api/Ext.data.Writer-method-constructor' class='name expandable'>Ext.data.JsonWriter</a>( <span class='pre'>Object config</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Optional config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRecordData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Writer' rel='Ext.data.Writer' class='definedIn docClass'>Ext.data.Writer</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Writer-method-getRecordData' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Writer-method-getRecordData' class='name expandable'>getRecordData</a>( <span class='pre'>Object record</span> ) : Object</div><div class='description'><div class='short'>Formats the data for each record before sending it to the server. ...</div><div class='long'><p>Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data in a way that differs from the default.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'><p>The record that we are writing to the server.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object literal of name/value keys to be written to the server.\nBy default this method returns the data property on the record.</p>\n</div></li></ul></div></div></div><div id='method-write' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Writer' rel='Ext.data.Writer' class='definedIn docClass'>Ext.data.Writer</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Writer-method-write' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Writer-method-write' class='name expandable'>write</a>( <span class='pre'><a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> request</span> ) : <a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a></div><div class='description'><div class='short'>Prepares a Proxy's Ext.data.Request object ...</div><div class='long'><p>Prepares a Proxy's <a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a><div class='sub-desc'><p>The request object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a></span><div class='sub-desc'><p>The modified request object</p>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"sencha-touch-debug-w-comments.html#Ext-data-JsonWriter"});