# 📄 Rechnungs-Extraktor - Deployment Anleitung

## 🚀 1-Klick-Deployment auf Vercel (EINFACHSTE METHODE)

### Option A: Direkt über Vercel Dashboard

1. **Gehe zu:** https://vercel.com
2. **Registriere dich** (kostenlos mit GitHub, Google oder Email)
3. **Klicke auf** "Add New" → "Project"
4. **Importiere diese Dateien:**
   - Lade alle 4 Dateien hoch:
     - `index.html`
     - `extract.js`
     - `package.json`
     - `vercel.json`
5. **Deploy klicken**
6. **Fertig!** Du bekommst eine URL wie: `https://dein-projekt.vercel.app`

---

### Option B: Mit GitHub (empfohlen für Updates)

1. **Erstelle ein GitHub Repository:**
   - Gehe zu https://github.com/new
   - Name: `rechnung-extraktor`
   - Klicke "Create repository"

2. **Lade diese Dateien hoch:**
   - Klicke "uploading an existing file"
   - Ziehe alle 4 Dateien rein
   - Commit

3. **Verbinde mit Vercel:**
   - Gehe zu https://vercel.com/new
   - Wähle dein GitHub Repository
   - Klicke "Deploy"

4. **Fertig!** Jedes Mal wenn du Dateien auf GitHub updatest, deployt Vercel automatisch!

---

## 📱 So verwendest du die App

1. **Öffne die URL** (z.B. `https://dein-projekt.vercel.app`)
2. **API Key eingeben:**
   - Hole dir einen bei https://console.anthropic.com
   - Gib ihn ein und klicke "Speichern"
3. **PDF hochladen** und "Extrahieren" klicken
4. **Fertig!** Daten werden angezeigt und können kopiert werden

---

## 💰 Kosten

- **Vercel Hosting:** KOSTENLOS (100GB Bandbreite/Monat)
- **Claude API:** ~€0.04 pro Rechnung
- **Erste $5 bei Anthropic:** GRATIS (= 125 Rechnungen zum Testen)

---

## 🎯 Für Kunden-Einsatz

### Eigene Domain verwenden

1. **Domain kaufen** (z.B. bei Namecheap, GoDaddy)
2. **In Vercel Dashboard:**
   - Settings → Domains
   - Domain hinzufügen
   - DNS-Einträge wie angezeigt setzen

Beispiel: `rechnung.christian-consulting.at`

### Multi-User Setup (optional)

Falls du die App für mehrere Kunden betreiben willst:
- Jeder Kunde verwendet seinen eigenen API Key
- Oder: Du hostest für jeden Kunden eine eigene Instanz
- Oder: Du erweiterst die App um User-Management (siehe `API-Struktur-Dokumentation.md`)

---

## 🔒 Sicherheit

- ✅ API Keys werden nur im Browser gespeichert (localStorage)
- ✅ Keine Daten werden auf dem Server gespeichert
- ✅ HTTPS ist automatisch aktiv
- ✅ DSGVO-konform (keine Datenspeicherung)

---

## 🛠️ Problemlösung

### "Failed to fetch" Fehler:
- Stelle sicher, dass alle 4 Dateien hochgeladen sind
- Prüfe ob `vercel.json` korrekt ist

### API Key funktioniert nicht:
- Prüfe ob der Key mit `sk-ant-` beginnt
- Gehe zu console.anthropic.com und erstelle einen neuen

### PDF wird nicht verarbeitet:
- Maximale Größe: 10MB
- Nur PDF-Dateien werden unterstützt

---

## 📞 Support

Bei Fragen: Christian's KMU Solutions
Email: [deine-email]

---

## 🚀 Nächste Schritte

1. **Jetzt deployen** und erste Rechnung testen
2. **Landing Page erstellen** für Kunden
3. **Template-System** für Firmen-spezifische Excel-Formate
4. **Excel-Export** statt nur Text-Anzeige

Siehe `API-Struktur-Dokumentation.md` für erweiterte Features!
