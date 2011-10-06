Ext.data.JsonP.Ext_util_Point({"mixedInto":[],"static":false,"html_filename":"sencha-touch-debug-w-comments.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Object","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[{"static":true,"required":null,"tagname":"method","owner":"Ext.util.Point","protected":false,"deprecated":null,"name":"fromEvent"}],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Point","protected":false,"deprecated":null,"name":"copy"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Point","protected":false,"deprecated":null,"name":"copyFrom"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Point","protected":false,"deprecated":null,"name":"equals"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Point","protected":false,"deprecated":null,"name":"isWithin"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Point","protected":false,"deprecated":null,"name":"roundedEquals"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Point","protected":false,"deprecated":null,"name":"toString"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Point","protected":false,"deprecated":null,"name":"translate"}],"property":[]},"author":null,"protected":false,"linenr":3870,"subclasses":[],"singleton":false,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":[],"mixins":[],"name":"Ext.util.Point","filename":"Ext.ux.Calendar/lib/sencha/sencha-touch-debug-w-comments.js","component":false,"code_type":"assignment","html":"<div><div class='doc-contents'><p>Represents a 2D point with x and y properties, useful for comparison and instantiation\nfrom an event:</p>\n\n<pre><code>var point = Ext.util.Point.fromEvent(e);\n</code></pre>\n\n</div><div class='members'><div id='m-method'><h3 class='members-title'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-copy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Point' rel='Ext.util.Point' class='definedIn docClass'>Ext.util.Point</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Point-method-copy' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Point-method-copy' class='name expandable'>copy</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a></div><div class='description'><div class='short'>Copy a new instance of this point ...</div><div class='long'><p>Copy a new instance of this point</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a></span><div class='sub-desc'><p>the new point</p>\n</div></li></ul></div></div></div><div id='method-copyFrom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Point' rel='Ext.util.Point' class='definedIn docClass'>Ext.util.Point</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Point-method-copyFrom' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Point-method-copyFrom' class='name expandable'>copyFrom</a>( <span class='pre'>Object p</span> ) : <a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a></div><div class='description'><div class='short'>Copy the x and y values of another point / object to this point itself ...</div><div class='long'><p>Copy the x and y values of another point / object to this point itself</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>p</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a></span><div class='sub-desc'><p>this This point</p>\n</div></li></ul></div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Point' rel='Ext.util.Point' class='definedIn docClass'>Ext.util.Point</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Point-method-equals' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Point-method-equals' class='name expandable'>equals</a>( <span class='pre'><a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a>/Object The</span> ) : Boolean</div><div class='description'><div class='short'>Compare this point and another point ...</div><div class='long'><p>Compare this point and another point</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a>/Object<div class='sub-desc'><p>point to compare with, either an instance\nof <a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> or an object with x and y properties</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Returns whether they are equivalent</p>\n</div></li></ul></div></div></div><div id='method-isWithin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Point' rel='Ext.util.Point' class='definedIn docClass'>Ext.util.Point</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Point-method-isWithin' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Point-method-isWithin' class='name expandable'>isWithin</a>( <span class='pre'><a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a>/Object The, Object/Number threshold</span> ) : Boolean</div><div class='description'><div class='short'>Whether the given point is not away from this point within the given threshold amount ...</div><div class='long'><p>Whether the given point is not away from this point within the given threshold amount</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a>/Object<div class='sub-desc'><p>point to check with, either an instance\nof <a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> or an object with x and y properties</p>\n</div></li><li><span class='pre'>threshold</span> : Object/Number<div class='sub-desc'><p>Can be either an object with x and y properties or a number</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-roundedEquals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Point' rel='Ext.util.Point' class='definedIn docClass'>Ext.util.Point</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Point-method-roundedEquals' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Point-method-roundedEquals' class='name expandable'>roundedEquals</a>( <span class='pre'><a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a>/Object The</span> ) : Boolean</div><div class='description'><div class='short'>Compare this point with another point when the x and y values of both points are rounded. ...</div><div class='long'><p>Compare this point with another point when the x and y values of both points are rounded. E.g:\n[100.3,199.8] will equals to [100, 200]</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a>/Object<div class='sub-desc'><p>point to compare with, either an instance\nof <a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> or an object with x and y properties</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Point' rel='Ext.util.Point' class='definedIn docClass'>Ext.util.Point</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Point-method-toString' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Point-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns a human-eye-friendly string that represents this point,\nuseful for debugging ...</div><div class='long'><p>Returns a human-eye-friendly string that represents this point,\nuseful for debugging</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-translate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Point' rel='Ext.util.Point' class='definedIn docClass'>Ext.util.Point</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Point-method-translate' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Point-method-translate' class='name expandable'>translate</a>( <span class='pre'>Number x, Number y</span> ) : Boolean</div><div class='description'><div class='short'>Translate this point by the given amounts ...</div><div class='long'><p>Translate this point by the given amounts</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>Amount to translate in the x-axis</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>Amount to translate in the y-axis</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='method-fromEvent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Point' rel='Ext.util.Point' class='definedIn docClass'>Ext.util.Point</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Point-method-fromEvent' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Point-method-fromEvent' class='name expandable'>fromEvent</a>( <span class='pre'>Event e</span> )<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Returns a new instance of Ext.util.Point base on the pageX / pageY values of the given event ...</div><div class='long'><p>Returns a new instance of <a href=\"#!/api/Ext.util.Point\" rel=\"Ext.util.Point\" class=\"docClass\">Ext.util.Point</a> base on the pageX / pageY values of the given event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>undefined</span><div class='sub-desc'><p>Ext.util.Point</p>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"sencha-touch-debug-w-comments.html#Ext-util-Point"});