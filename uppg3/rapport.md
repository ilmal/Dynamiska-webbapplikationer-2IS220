# Rapport

## 1. Vad menas med DOM (Document Object Model) samt hur användes det i din applikation?

DOM står för Document Object Model och är en programmeringsgränssnitt för webbdokument. Den representerar strukturen av ett dokument som ett träd av noder, där varje nod är en del av dokumentet, såsom element, attribut och text. DOM tillåter programmerare att manipulera strukturen, stilen och innehållet i ett dokument på ett dynamiskt sätt.

I min applikation användes DOM för att skapa och infoga nya HTML-element dynamiskt baserat på data som hämtades från API:t. Varje rad i tabellen skapades med hjälp av JavaScript och DOM-manipulation genom att skapa `<tr>` och `<td>` element och fylla dessa med den relevanta informationen från API:t.

## 2. Vad menas med AJAX (Asynchronous Javascript and XML) samt hur används det i din applikation?

AJAX står för Asynchronous JavaScript and XML och är en teknik som tillåter webbapplikationer att kommunicera med en server i bakgrunden utan att ladda om hela sidan. Detta gör att webbapplikationer kan uppdatera delar av sidan med ny data dynamiskt.

I min applikation användes AJAX för att hämta stryktipsdata från ett API. Genom att använda `fetch`-funktionen i JavaScript gjorde jag ett asynkront anrop till API:t, hämtade data i JSON-format och använde denna data för att uppdatera DOM och visa matchresultaten på sidan utan att ladda om hela webbsidan.
