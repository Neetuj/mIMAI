<div data-role="header" data-position="fixed">
    <a id="btnBack" href="#" data-icon="back">Back</a>
    <h1>Select a drug</h1>
</div>
<% _.each( collection.toJSON(), function( drug ) { %>
	
	<li class="ui-li ui-li-static ui-btn-up-c ui-corner-top">
		<%= drug.name %>
	</li>

<% }); console.log(collection)%>