Ext.data.JsonP.Ext_DomQuery({"mixedInto":[],"static":false,"html_filename":"sencha-touch-debug-w-comments.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":null,"statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.DomQuery","protected":false,"deprecated":null,"name":"is"},{"static":false,"required":null,"tagname":"method","owner":"Ext.DomQuery","protected":false,"deprecated":null,"name":"select"},{"static":false,"required":null,"tagname":"method","owner":"Ext.DomQuery","protected":false,"deprecated":null,"name":"selectNode"}],"property":[]},"author":null,"protected":false,"linenr":21695,"subclasses":[],"singleton":true,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":[],"mixins":[],"name":"Ext.DomQuery","filename":"Ext.ux.Calendar/lib/sencha/sencha-touch-debug-w-comments.js","component":false,"code_type":"assignment","html":"<div><div class='doc-contents'><p>Provides functionality to select elements on the page based on a CSS selector.</p>\n\n<p>\nAll selectors, attribute filters and pseudos below can be combined infinitely in any order. For example \"div.foo:nth-child(odd)[@foo=bar].bar:first\" would be a perfectly valid selector.\n</p>\n\n\n<h4>Element Selectors:</h4>\n\n\n<ul class=\"list\">\n    <li> <b>*</b> any element</li>\n    <li> <b>E</b> an element with the tag E</li>\n    <li> <b>E F</b> All descendent elements of E that have the tag F</li>\n    <li> <b>E > F</b> or <b>E/F</b> all direct children elements of E that have the tag F</li>\n    <li> <b>E + F</b> all elements with the tag F that are immediately preceded by an element with the tag E</li>\n    <li> <b>E ~ F</b> all elements with the tag F that are preceded by a sibling element with the tag E</li>\n</ul>\n\n\n<h4>Attribute Selectors:</h4>\n\n\n<p>The use of &#64; and quotes are optional. For example, div[&#64;foo='bar'] is also a valid attribute selector.</p>\n\n\n<ul class=\"list\">\n    <li> <b>E[foo]</b> has an attribute \"foo\"</li>\n    <li> <b>E[foo=bar]</b> has an attribute \"foo\" that equals \"bar\"</li>\n    <li> <b>E[foo^=bar]</b> has an attribute \"foo\" that starts with \"bar\"</li>\n    <li> <b>E[foo$=bar]</b> has an attribute \"foo\" that ends with \"bar\"</li>\n    <li> <b>E[foo*=bar]</b> has an attribute \"foo\" that contains the substring \"bar\"</li>\n    <li> <b>E[foo%=2]</b> has an attribute \"foo\" that is evenly divisible by 2</li>\n    <li> <b>E[foo!=bar]</b> has an attribute \"foo\" that does not equal \"bar\"</li>\n</ul>\n\n\n<h4>Pseudo Classes:</h4>\n\n\n<ul class=\"list\">\n    <li> <b>E:first-child</b> E is the first child of its parent</li>\n    <li> <b>E:last-child</b> E is the last child of its parent</li>\n    <li> <b>E:nth-child(<i>n</i>)</b> E is the <i>n</i>th child of its parent (1 based as per the spec)</li>\n    <li> <b>E:nth-child(odd)</b> E is an odd child of its parent</li>\n    <li> <b>E:nth-child(even)</b> E is an even child of its parent</li>\n    <li> <b>E:only-child</b> E is the only child of its parent</li>\n    <li> <b>E:checked</b> E is an element that is has a checked attribute that is true (e.g. a radio or checkbox) </li>\n    <li> <b>E:first</b> the first E in the resultset</li>\n    <li> <b>E:last</b> the last E in the resultset</li>\n    <li> <b>E:nth(<i>n</i>)</b> the <i>n</i>th E in the resultset (1 based)</li>\n    <li> <b>E:odd</b> shortcut for :nth-child(odd)</li>\n    <li> <b>E:even</b> shortcut for :nth-child(even)</li>\n    <li> <b>E:contains(foo)</b> E's innerHTML contains the substring \"foo\"</li>\n    <li> <b>E:nodeValue(foo)</b> E contains a textNode with a nodeValue that equals \"foo\"</li>\n    <li> <b>E:not(S)</b> an E element that does not match simple selector S</li>\n    <li> <b>E:has(S)</b> an E element that has a descendent that matches simple selector S</li>\n    <li> <b>E:next(S)</b> an E element whose next sibling matches simple selector S</li>\n    <li> <b>E:prev(S)</b> an E element whose previous sibling matches simple selector S</li>\n    <li> <b>E:any(S1|S2|S2)</b> an E element which matches any of the simple selectors S1, S2 or S3//\\\\</li>\n</ul>\n\n\n<h4>CSS Value Selectors:</h4>\n\n\n<ul class=\"list\">\n    <li> <b>E{display=none}</b> css value \"display\" that equals \"none\"</li>\n    <li> <b>E{display^=none}</b> css value \"display\" that starts with \"none\"</li>\n    <li> <b>E{display$=none}</b> css value \"display\" that ends with \"none\"</li>\n    <li> <b>E{display*=none}</b> css value \"display\" that contains the substring \"none\"</li>\n    <li> <b>E{display%=2}</b> css value \"display\" that is evenly divisible by 2</li>\n    <li> <b>E{display!=none}</b> css value \"display\" that does not equal \"none\"</li>\n</ul>\n\n</div><div class='members'><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-is' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.DomQuery' rel='Ext.DomQuery' class='definedIn docClass'>Ext.DomQuery</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-DomQuery-method-is' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.DomQuery-method-is' class='name expandable'>is</a>( <span class='pre'>String/HTMLElement/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> el, String selector</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the passed element(s) match the passed simple selector (e.g. ...</div><div class='long'><p>Returns true if the passed element(s) match the passed simple selector (e.g. div.some-class or span:first-child)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : String/HTMLElement/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>An element id, element or array of elements</p>\n</div></li><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>The simple selector to test</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-select' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.DomQuery' rel='Ext.DomQuery' class='definedIn docClass'>Ext.DomQuery</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-DomQuery-method-select' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.DomQuery-method-select' class='name expandable'>select</a>( <span class='pre'>String selector, [Node/String root]</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Selects a group of elements. ...</div><div class='long'><p>Selects a group of elements.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>The selector/xpath query (can be a comma separated list of selectors)</p>\n</div></li><li><span class='pre'>root</span> : Node/String (optional)<div class='sub-desc'><p>The start of the query (defaults to document).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>An Array of DOM elements which match the selector. If there are\nno matches, and empty Array is returned.</p>\n</div></li></ul></div></div></div><div id='method-selectNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.DomQuery' rel='Ext.DomQuery' class='definedIn docClass'>Ext.DomQuery</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-DomQuery-method-selectNode' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.DomQuery-method-selectNode' class='name expandable'>selectNode</a>( <span class='pre'>String selector, [Node root]</span> ) : HtmlElement</div><div class='description'><div class='short'>Selects a single element. ...</div><div class='long'><p>Selects a single element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : String<div class='sub-desc'><p>The selector/xpath query</p>\n</div></li><li><span class='pre'>root</span> : Node (optional)<div class='sub-desc'><p>The start of the query (defaults to document).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HtmlElement</span><div class='sub-desc'><p>The DOM element which matched the selector.</p>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"sencha-touch-debug-w-comments.html#Ext-DomQuery"});