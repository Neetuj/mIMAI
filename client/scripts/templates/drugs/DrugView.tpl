<div data-role="header" data-position="fixed">
    <a id="btnBack" href="#" data-icon="back">Back</a>
    <h1><%= model.get("name") %></h1>
</div>
<div data-role="content">
	<div data-role="collapsible" data-collapsed="false">
		<h3>Formulation</h3>
		<p><%= model.get("formulation") %></p>
	</div>
	<div data-role="collapsible">
		<h3>Drug indications and dosing</h3>
	</div>