Ext.data.JsonP.Ext_layout_VBoxLayout({"mixedInto":[],"static":false,"html_filename":"sencha-touch-debug-w-comments.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Ext.layout.BoxLayout","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[{"static":false,"required":null,"tagname":"cfg","owner":"Ext.layout.VBoxLayout","protected":false,"deprecated":null,"name":"align"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.layout.BoxLayout","protected":false,"deprecated":null,"name":"direction"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.layout.ContainerLayout","protected":false,"deprecated":null,"name":"itemCls"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.layout.VBoxLayout","protected":false,"deprecated":null,"name":"pack"}],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.layout.ContainerLayout","protected":false,"deprecated":null,"name":"getLayoutItems"},{"static":false,"required":null,"tagname":"method","owner":"Ext.layout.ContainerLayout","protected":false,"deprecated":null,"name":"getTarget"}],"property":[]},"author":null,"protected":false,"linenr":44899,"subclasses":[],"singleton":false,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":["Ext.layout.Layout","Ext.layout.ContainerLayout","Ext.layout.BoxLayout","Ext.layout.VBoxLayout"],"mixins":[],"name":"Ext.layout.VBoxLayout","filename":"Ext.ux.Calendar/lib/sencha/sencha-touch-debug-w-comments.js","component":false,"code_type":"assignment","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.Layout' rel='Ext.layout.Layout' class='docClass'>Ext.layout.Layout</a><div class='subclass '><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='docClass'>Ext.layout.ContainerLayout</a><div class='subclass '><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='docClass'>Ext.layout.BoxLayout</a><div class='subclass '><strong>Ext.layout.VBoxLayout</strong></div></div></div></div></pre><div class='doc-contents'><p>A layout that arranges items vertically down a Container. This layout optionally divides available vertical\nspace between child items containing a numeric <code>flex</code> configuration. The flex option is a ratio that\ndistributes height after any items with explicit heights have been accounted for. In the code below, the height is calculated\nas follows:\n<ul>\n  <li>The fixed height item is subtracted, leaving us with 300 height</li>\n  <li>The total flex number is counted, in this case, it is 3</li>\n  <li>The ratio is then calculated, 300 / 3 = 100</li>\n  <li>The first item has a flex of 2, so it is set to 2 * 100</li>\n  <li>The other remaining item is set to 1 * 100</li>\n</ul></p>\n\n\n<pre><code>new Ext.Container({\n    width: 300,\n    height: 400,\n    layout: {\n        type: 'vbox',\n        align: 'stretch'\n    },\n    items: [{\n        flex: 2,\n        html: 'First'\n    },{\n        width: 100,\n        html: 'Second'\n    },{\n        flex: 1,\n        html: 'Third'\n    }]\n});\n</code></pre>\n\n\n<p>This layout may also be used to set the widths of child items by configuring it with the <a href=\"#!/api/Ext.layout.VBoxLayout-cfg-align\" rel=\"Ext.layout.VBoxLayout-cfg-align\" class=\"docClass\">align</a> option.</p>\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-align' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.VBoxLayout' rel='Ext.layout.VBoxLayout' class='definedIn docClass'>Ext.layout.VBoxLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-VBoxLayout-cfg-align' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.layout.VBoxLayout-cfg-align' class='name expandable'>align</a><span> : String</span></div><div class='description'><div class='short'>Specifies the horizontal alignignment of child components. ...</div><div class='long'><p>Specifies the horizontal alignignment of child components. Defaults to <tt>'center'</tt>. Acceptable values are:</p>\n\n<ul>\n<li><b>center</b> : <div class=\"sub-desc\">\nAligned to the center of the container.\n</div></li>\n\n<li><b>end</b> : <div class=\"sub-desc\">\nAligned to the right of the container.\n</div></li>\n\n<li><b>start</b> : <div class=\"sub-desc\">\nAligned to the left of the container.\n</div></li>\n\n<li><b>stretch</b> : <div class=\"sub-desc\">\nComponents are stretched horizontally to fill the container.\n</div></li>\n</ul>\n\n</div></div></div><div id='cfg-direction' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='definedIn docClass'>Ext.layout.BoxLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-BoxLayout-cfg-direction' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-cfg-direction' class='name expandable'>direction</a><span> : String</span></div><div class='description'><div class='short'>Specifies the direction in which child components are laid out. ...</div><div class='long'><p>Specifies the direction in which child components are laid out. Defaults\nto <tt>'normal'</tt>, which means they are laid out in the order they are added. You can use the\n<tt>'reverse'</tt> option to have them laid out in reverse.</p>\n<p>Defaults to: <code>&quot;normal&quot;</code></p></div></div></div><div id='cfg-itemCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='definedIn docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-ContainerLayout-cfg-itemCls' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-itemCls' class='name expandable'>itemCls</a><span> : String</span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.ctCls also.</p>\n\n\n<p></p></p>\n</div></div></div><div id='cfg-pack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.VBoxLayout' rel='Ext.layout.VBoxLayout' class='definedIn docClass'>Ext.layout.VBoxLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-VBoxLayout-cfg-pack' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.layout.VBoxLayout-cfg-pack' class='name expandable'>pack</a><span> : String</span></div><div class='description'><div class='short'>Specifies the vertical alignment of child components. ...</div><div class='long'><p>Specifies the vertical alignment of child components. Defaults to <tt>'start'</tt>. Acceptable values are:</p>\n\n<ul>\n<li><b>center</b> : <div class=\"sub-desc\">\nAligned to the center of the container.\n</div></li>\n\n<li><b>end</b> : <div class=\"sub-desc\">\nAligned to the bottom of the container.\n</div></li>\n\n<li><b>justify</b> : <div class=\"sub-desc\">\nJustified with both the top and bottom of the container.\n</div></li>\n\n<li><b>start</b> : <div class=\"sub-desc\">\nAligned to the top of the container.\n</div></li>\n</ul>\n\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-getLayoutItems' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='definedIn docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-ContainerLayout-method-getLayoutItems' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-getLayoutItems' class='name expandable'>getLayoutItems</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Returns an array of child components. ...</div><div class='long'><p>Returns an array of child components.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>of child components</p>\n</div></li></ul></div></div></div><div id='method-getTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='definedIn docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-layout-ContainerLayout-method-getTarget' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-getTarget' class='name expandable'>getTarget</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Returns the owner component's resize element. ...</div><div class='long'><p>Returns the owner component's resize element.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"sencha-touch-debug-w-comments.html#Ext-layout-VBoxLayout"});