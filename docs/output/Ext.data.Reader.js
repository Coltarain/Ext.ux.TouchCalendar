Ext.data.JsonP.Ext_data_Reader({"mixedInto":[],"static":false,"html_filename":"sencha-touch-debug-w-comments.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":"Object","statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"idProperty"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"implicitIncludes"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"root"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"successProperty"},{"static":false,"required":null,"tagname":"cfg","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"totalProperty"}],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"constructor"},{"static":false,"required":null,"tagname":"method","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"getResponseData"},{"static":false,"required":null,"tagname":"method","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"read"},{"static":false,"required":null,"tagname":"method","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"readRecords"}],"property":[{"static":false,"required":null,"tagname":"property","owner":"Ext.data.Reader","protected":false,"deprecated":null,"name":"rawData"}]},"author":"Ed Spencer","protected":false,"linenr":15292,"subclasses":["Ext.data.JsonReader","Ext.data.XmlReader"],"singleton":false,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":[],"mixins":[],"name":"Ext.data.Reader","filename":"Ext.ux.Calendar/lib/sencha/sencha-touch-debug-w-comments.js","component":false,"code_type":"assignment","html":"<div><div class='doc-contents'><p>Readers are used to interpret data to be loaded into a <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instance or a <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\n- usually in response to an AJAX request. This is normally handled transparently by passing some configuration to either the \n<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> or the <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> in question - see their documentation for further details.</p>\n\n\n\n\n<p><u>Loading Nested Data</u></p>\n\n\n\n\n<p>Readers have the ability to automatically load deeply-nested data objects based on the <a href=\"#!/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">associations</a>\nconfigured on each Model. Below is an example demonstrating the flexibility of these associations in a fictional CRM system which\nmanages a User, their Orders, OrderItems and Products. First we'll define the models:\n\n<pre><code>Ext.regModel(\"User\", {\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: {model: 'Order', name: 'orders'},\n\n    proxy: {\n        type: 'rest',\n        url : 'users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    }\n});\n\nExt.regModel(\"Order\", {\n    fields: [\n        'id', 'total'\n    ],\n\n    hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},\n    belongsTo: 'User'\n});\n\nExt.regModel(\"OrderItem\", {\n    fields: [\n        'id', 'price', 'quantity', 'order_id', 'product_id'\n    ],\n\n    belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]\n});\n\nExt.regModel(\"Product\", {\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: 'OrderItem'\n});\n</code></pre>\n\n<p>This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems. Finally,\neach OrderItem has a single Product. This allows us to consume data like this:</p>\n\n<pre><code>{\n    \"users\": [\n        {\n            \"id\": 123,\n            \"name\": \"Ed\",\n            \"orders\": [\n                {\n                    \"id\": 50,\n                    \"total\": 100,\n                    \"order_items\": [\n                        {\n                            \"id\"      : 20,\n                            \"price\"   : 40,\n                            \"quantity\": 2,\n                            \"product\" : {\n                                \"id\": 1000,\n                                \"name\": \"MacBook Pro\"\n                            }\n                        },\n                        {\n                            \"id\"      : 21,\n                            \"price\"   : 20,\n                            \"quantity\": 3,\n                            \"product\" : {\n                                \"id\": 1001,\n                                \"name\": \"iPhone\"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</code></pre>\n\n<p>The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the Orders\nfor each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case), and finally\nthe Product associated with each OrderItem. Now we can read the data and use it as follows:\n\n<pre><code>var store = new Ext.data.Store({\n    model: \"User\"\n});\n\nstore.load({\n    callback: function() {\n        //the user that was loaded\n        var user = store.first();\n\n        console.log(\"Orders for \" + user.get('name') + \":\")\n\n        //iterate over the Orders for each User\n        user.orders().each(function(order) {\n            console.log(\"Order ID: \" + order.getId() + \", which contains items:\");\n\n            //iterate over the OrderItems for each Order\n            order.orderItems().each(function(orderItem) {\n                //we know that the Product data is already loaded, so we can use the synchronous getProduct\n                //usually, we would use the asynchronous version (see <a href=\"#!/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">Ext.data.BelongsToAssociation</a>)\n                var product = orderItem.getProduct();\n\n                console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));\n            });\n        });\n    }\n});\n</code></pre>\n\n<p>Running the code above results in the following:</p>\n\n<pre><code>Orders for Ed:\nOrder ID: 50, which contains items:\n2 orders of MacBook Pro\n3 orders of iPhone\n</code></pre>\n\n</div><div class='members'><div id='m-cfg'><div class='definedBy'>Defined By</div><h3 class='members-title'>Config options</h3><div class='subsection'><div id='cfg-idProperty' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-cfg-idProperty' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Reader-cfg-idProperty' class='name expandable'>idProperty</a><span> : String</span></div><div class='description'><div class='short'>Name of the property within a row object\nthat contains a record identifier value. ...</div><div class='long'><p>Name of the property within a row object\nthat contains a record identifier value.  Defaults to <tt>id</tt></p>\n<p>Defaults to: <code>&quot;id&quot;</code></p></div></div></div><div id='cfg-implicitIncludes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-cfg-implicitIncludes' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Reader-cfg-implicitIncludes' class='name expandable'>implicitIncludes</a><span> : Boolean</span></div><div class='description'><div class='short'>True to automatically parse models nested within other models in a response\nobject. ...</div><div class='long'><p>True to automatically parse models nested within other models in a response\nobject. See the <a href=\"#!/api/Ext.data.Reader\" rel=\"Ext.data.Reader\" class=\"docClass\">Ext.data.Reader</a> intro docs for full explanation. Defaults to true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-root' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-cfg-root' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Reader-cfg-root' class='name expandable'>root</a><span> : String</span></div><div class='description'><div class='short'>Required. ...</div><div class='long'><p><b>Required</b>.  The name of the property\nwhich contains the Array of row objects.  Defaults to <tt>undefined</tt>.\nAn exception will be thrown if the root property is undefined. The data\npacket value for this property should be an empty array to clear the data\nor show no data.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-successProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-cfg-successProperty' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Reader-cfg-successProperty' class='name expandable'>successProperty</a><span> : String</span></div><div class='description'><div class='short'>Name of the property from which to\nretrieve the success attribute. ...</div><div class='long'><p>Name of the property from which to\nretrieve the success attribute. Defaults to <tt>success</tt>.  See\nExt.data.DataProxy.exception\nfor additional information.</p>\n<p>Defaults to: <code>&quot;success&quot;</code></p></div></div></div><div id='cfg-totalProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-cfg-totalProperty' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Reader-cfg-totalProperty' class='name expandable'>totalProperty</a><span> : String</span></div><div class='description'><div class='short'>Name of the property from which to\nretrieve the total number of records in the dataset. ...</div><div class='long'><p>Name of the property from which to\nretrieve the total number of records in the dataset. This is only needed\nif the whole dataset is not passed in one go, but is being paged from\nthe remote server.  Defaults to <tt>total</tt>.</p>\n<p>Defaults to: <code>&quot;total&quot;</code></p></div></div></div></div></div><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-rawData' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-property-rawData' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Reader-property-rawData' class='name expandable'>rawData</a><span> : Mixed</span></div><div class='description'><div class='short'>The raw data object that was last passed to readRecords. ...</div><div class='long'><p>The raw data object that was last passed to readRecords. Stored for further processing if needed</p>\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-constructor' target='_blank' class='viewSource'>view source</a></div><strong class='constructor-signature'>new</strong><a href='#!/api/Ext.data.Reader-method-constructor' class='name expandable'>Ext.data.Reader</a>( <span class='pre'>Object config</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Optional config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getResponseData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-getResponseData' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Reader-method-getResponseData' class='name expandable'>getResponseData</a>( <span class='pre'>Object response</span> ) : Object</div><div class='description'><div class='short'>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. ...</div><div class='long'><p>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be implemented by each subclass</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The responce object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The useful data from the response</p>\n</div></li></ul></div></div></div><div id='method-read' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-read' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Reader-method-read' class='name expandable'>read</a>( <span class='pre'>Object response</span> ) : <a href=\"#!/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a></div><div class='description'><div class='short'>Reads the given response object. ...</div><div class='long'><p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the readRecords function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The response object. This may be either an XMLHttpRequest object or a plain JS object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a></span><div class='sub-desc'><p>The parsed ResultSet object</p>\n</div></li></ul></div></div></div><div id='method-readRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.Reader' rel='Ext.data.Reader' class='definedIn docClass'>Ext.data.Reader</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-data-Reader-method-readRecords' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.data.Reader-method-readRecords' class='name expandable'>readRecords</a>( <span class='pre'>Mixed data</span> ) : <a href=\"#!/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a></div><div class='description'><div class='short'>Abstracts common functionality used by all Reader subclasses. ...</div><div class='long'><p>Abstracts common functionality used by all Reader subclasses. Each subclass is expected to call\nthis function before running its own logic and returning the <a href=\"#!/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a> instance. For most\nReaders additional processing should not be needed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Mixed<div class='sub-desc'><p>The raw data object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a></span><div class='sub-desc'><p>A ResultSet object</p>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"sencha-touch-debug-w-comments.html#Ext-data-Reader"});