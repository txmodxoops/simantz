var temp_ntb_listboxXslProc='<?xml version="1.0" encoding="utf-8"?><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ntb="http://www.nitobi.com"> <xsl:output method="xml" omit-xml-declaration="yes"/> <x:p-x:n-size"></x:p-> <x:p-x:n-DisplayFields"x:s-\'\'"></x:p-> <x:p-x:n-ValueField"x:s-\'\'"></x:p-> <x:p-x:n-val"x:s-\'\'"></x:p-> <x:t- match="/"> <!--<x:va-x:n-cell"x:s-/root/metadata/r[@xi=$row]/*[@xi=$col]"></x:va->--> <select id="ntb-listbox" class="ntb-input ntb-lookup-options"> <xsl:if test="$size"> <x:a-x:n-size">6</x:a-> </xsl:if> <!--<x:c-> <x:wh- test="$DatasourceId">--> <xsl:for-eachx:s-/ntb:datasource/ntb:data/*"> <xsl:sortx:s-@*[name(.)=substring-before($DisplayFields,\'|\')]" data-type="text" order="ascending" /> <option> <x:a-x:n-value"> <x:v-x:s-@*[name(.)=$ValueField]"></x:v-> </x:a-> <x:a-x:n-rn"> <x:v-x:s-position()"></x:v-> </x:a-> <xsl:if test="@*[name(.)=$ValueField and .=$val]"> <x:a-x:n-selected">true</x:a-> </xsl:if> <x:ct-x:n-print-displayfields"> <x:w-x:n-field"x:s-$DisplayFields" /> </x:ct-> </option> </xsl:for-each> <!--</x:wh-> <x:o-> </x:o-> </x:c->--> </select> </x:t-> <x:t-x:n-print-displayfields"> <x:p-x:n-field" /> <x:c-> <x:wh- test="contains($field,\'|\')" > <!-- Here we hardcode a spacer \', \' - this should probably be moved elsewhere. --> <x:v-x:s-concat(@*[name(.)=substring-before($field,\'|\')],\', \')"></x:v-> <x:ct-x:n-print-displayfields"> <x:w-x:n-field"x:s-substring-after($field,\'|\')" /> </x:ct-> </x:wh-> <x:o-> <x:v-x:s-@*[name(.)=$field]"></x:v-> </x:o-> </x:c-> </x:t-> </xsl:stylesheet>';
nitobi.lang.defineNs("nitobi.form");
nitobi.form.listboxXslProc = nitobi.xml.createXslProcessor(nitobiXmlDecodeXslt(temp_ntb_listboxXslProc));
