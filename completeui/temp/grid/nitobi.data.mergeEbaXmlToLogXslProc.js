var temp_ntb_mergeEbaXmlToLogXslProc='<?xml version="1.0" encoding="utf-8"?><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ntb="http://www.nitobi.com"> <xsl:output method="xml" omit-xml-declaration="yes"/> <x:p-x:n-defaultAction"></x:p-> <x:p-x:n-startXid"x:s-100" ></x:p-> <xsl:keyx:n-newData" match="/ntb:grid/ntb:newdata/ntb:e" use="@xid" /> <xsl:keyx:n-oldData" match="/ntb:grid/ntb:datasources/ntb:datasource/ntb:data/ntb:e" use="@xid" /> <x:t- match="@* | node()" > <xsl:copy> <x:at-x:s-@*|node()" /> </xsl:copy> </x:t-> <x:t- match="/ntb:grid/ntb:datasources/ntb:datasource/ntb:data/ntb:e"> <xsl:if test="not(key(\'newData\',@xid))"> <xsl:copy> <xsl:copy-ofx:s-@*" /> </xsl:copy> </xsl:if> </x:t-> <x:t- match="/ntb:grid/ntb:datasources/ntb:datasource/ntb:data"> <xsl:copy> <x:at-x:s-@*|node()" /> <xsl:for-eachx:s-/ntb:grid/ntb:newdata/ntb:e"> <xsl:copy> <xsl:copy-ofx:s-@*" /> <xsl:if test="$defaultAction"> <x:va-x:n-oldNode"x:s-key(\'oldData\',@xid)" /> <x:c-> <x:wh- test="$oldNode"> <x:va- name=\'xid\'x:s-@xid" /> <x:a-x:n-xac"><x:v-x:s-$oldNode/@xac" /></x:a-> </x:wh-> <x:o-> <x:a-x:n-xac"><x:v-x:s-$defaultAction" /></x:a-> </x:o-> </x:c-> </xsl:if> </xsl:copy> </xsl:for-each> </xsl:copy> </x:t-></xsl:stylesheet> ';
nitobi.lang.defineNs("nitobi.data");
nitobi.data.mergeEbaXmlToLogXslProc = nitobi.xml.createXslProcessor(nitobiXmlDecodeXslt(temp_ntb_mergeEbaXmlToLogXslProc));
