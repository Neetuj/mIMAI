<div data-role="collapsible">
	<h3>Notes</h3>
	<% _.each(collection.toJSON(), function(note, id) { %>
		<h5><%= note.tag %></h5>
		<p><%= note.note %></p>
	<% }); %>
</div>