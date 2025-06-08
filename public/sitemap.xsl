<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap</title>
        <style>
          body { font-family: system-ui, sans-serif; background: #f9fafb; color: #222; margin: 0; padding: 2rem; }
          h1 { color: #2563eb; }
          table { border-collapse: collapse; width: 100%; background: #fff; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.06); }
          th, td { border: 1px solid #e5e7eb; padding: 0.75rem 1rem; text-align: left; }
          th { background: #eff6ff; color: #2563eb; }
          tr:nth-child(even) { background: #f3f4f6; }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="urlset/url">
            <tr>
              <td><xsl:value-of select="loc"/></td>
              <td><xsl:value-of select="lastmod"/></td>
              <td><xsl:value-of select="changefreq"/></td>
              <td><xsl:value-of select="priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
