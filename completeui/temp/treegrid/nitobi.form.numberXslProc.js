var temp_ntb_numberXslProc='<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ntb="http://www.nitobi.com" xmlns:d="http://exslt.org/dates-and-times" xmlns:n="http://www.nitobi.com/exslt/numbers" extension-element-prefixes="d n"><xsl:output method="text" version="4.0" omit-xml-declaration="yes" /><x:p-x:n-number"x:s-0" /><x:p-x:n-mask"x:s-\'#.00\'" /><x:p-x:n-group"x:s-\',\'" /><x:p-x:n-decimal"x:s-\'.\'" /> <!--http://www.w3schools.com/xsl/func_formatnumber.asp--><!-- <xsl:decimal-formatx:n-name" decimal-separator="char" grouping-separator="char" infinity="string" minus-sign="char" NaN="string" percent="char" per-mille="char" zero-digit="char" digit="char" pattern-separator="char"/> --><xsl:decimal-formatx:n-NA" decimal-separator="." grouping-separator="," /><xsl:decimal-formatx:n-EU" decimal-separator="," grouping-separator="." /><x:t-x:n-n:format"> <x:p-x:n-number"x:s-0" /> <x:p-x:n-mask"x:s-\'#.00\'" /> <x:p-x:n-group"x:s-\',\'" /> <x:p-x:n-decimal"x:s-\'.\'" /> <x:va-x:n-formattedNumber"> <x:c-> <x:wh- test="$group=\'.\' and $decimal=\',\'"> <x:v-x:s-format-number($number, $mask, \'EU\')" /> </x:wh-> <x:o-> <x:v-x:s-format-number($number, $mask, \'NA\')" /> </x:o-> </x:c-> </x:va-> <xsl:if test="not(string($formattedNumber) = \'NaN\')"> <x:v-x:s-$formattedNumber" /> </xsl:if></x:t-><x:t- match="/"> <x:ct-x:n-n:format"> <x:w-x:n-number"x:s-$number" /> <x:w-x:n-mask"x:s-$mask" /> <x:w-x:n-group"x:s-$group" /> <x:w-x:n-decimal"x:s-$decimal" /> </x:ct-></x:t-></xsl:stylesheet>';
nitobi.lang.defineNs("nitobi.form");
nitobi.form.numberXslProc = nitobi.xml.createXslProcessor(nitobiXmlDecodeXslt(temp_ntb_numberXslProc));
