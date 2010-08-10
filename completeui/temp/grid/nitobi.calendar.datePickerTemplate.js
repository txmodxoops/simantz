var temp_ntb_datePickerTemplate='<?xml version="1.0"?><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ntb="http://www.nitobi.com"> <xsl:output method="xml" omit-xml-declaration="yes" /> <xsl:strip-space elements="*"/> <x:t- match="ntb:datepicker"> <div id="{@id}"> <x:a-x:n-class"> ntb-calendar-reset <x:v-x:s-@theme"/> </x:a-> <x:at-x:s-ntb:dateinput"/> <xsl:if test="ntb:calendar and ntb:dateinput"> <div id="{@id}.button" style="float:left;" class="ntb-calendar-button"> <x:ct-x:n-dummy"></x:ct-> </div> </xsl:if> <div style="display:block;clear:both;float:none;height:0px;width:auto;overflow:hidden;"><xsl:comment>dummy</xsl:comment></div> <x:at-x:s-ntb:calendar"/> <input id="{@id}.value" type="hidden" value=""x:n-{@id}"/> </div> </x:t-> <x:t- match="ntb:dateinput"> <x:va-x:n-width"> <x:c-> <x:wh- test="contains(@width, \'px\')"> <x:v-x:s-substring-before(@width, \'px\')"/> </x:wh-> <x:o-> <x:v-x:s-@width" /> </x:o-> </x:c-> </x:va-> <div id="{@id}" style="float:left;"> <div id="{@id}.container" class="ntb-inputcontainer"> <x:a-x:n-style"> <xsl:if test="@width">width:<x:v-x:s-$width"/>px;</xsl:if> </x:a-> <input id="{@id}.input" type="text" class="ntb-dateinput"> <x:a-x:n-style"> font-size:100%;<xsl:if test="@cssstyle"><x:v-x:s-@cssstyle"/></xsl:if>; <xsl:if test="@width">width: <x:v-x:s-number($width) - 10"/>px;</xsl:if> </x:a-> <xsl:if test="@editable = \'false\'"> <x:a-x:n-disabled">true</x:a-> </xsl:if> </input> </div> </div> </x:t-> <x:t- match="ntb:calendar"> <div id="{@id}" onselectstart="return false;"> <x:a-x:n-style"> <xsl:if test="../ntb:dateinput">position:absolute;z-index:1000;</xsl:if>overflow:hidden; </x:a-> <x:a-x:n-class"> ntb-calendar-container nitobi-hide </x:a-> <x:ct-x:n-dummy"/> </div> </x:t-> <x:t-x:n-dummy"> <xsl:comment>dummy</xsl:comment> </x:t-></xsl:stylesheet>';
nitobi.lang.defineNs("nitobi.calendar");
nitobi.calendar.datePickerTemplate = nitobi.xml.createXslProcessor(nitobiXmlDecodeXslt(temp_ntb_datePickerTemplate));
