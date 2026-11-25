import puppeteer from 'puppeteer';

// Usage : `npm run dev` dans un terminal, puis `npm run pdf` (tous les CV) ou `npm run pdf:ats` (CV ATS seulement).
// Si Puppeteer ne trouve pas son Chrome, pointer vers le Chrome installé :
//   $env:PUPPETEER_EXECUTABLE_PATH = "C:\Program Files\Google\Chrome\Application\chrome.exe"
const ONLY_ATS = process.argv.includes('--ats');

const VARIANTS = [
  { path: 'alternance-ipssi', filename: 'Poletto_Theo_CV_Alternance_IPSSI.pdf' },
  { path: 'alternance-eni', filename: 'Poletto_Theo_CV_Alternance_ENI.pdf' },
  { path: 'alternance-openclassrooms', filename: 'Poletto_Theo_CV_Alternance_OpenClassrooms.pdf' },
  { path: 'cdi', filename: 'Poletto_Theo_CV_CDI.pdf' }
];

// Même nom que dans components/AtsResume.tsx (ATS_PDF_FILENAMES).
const ATS_VARIANTS = VARIANTS.map(({ path, filename }) => ({
  path: `ats/${path}`,
  filename: filename.replace('Poletto_Theo_CV_', 'Poletto_Theo_CV_ATS_')
}));

const browser = await puppeteer.launch();

if (!ONLY_ATS) {
  for (const { path, filename } of VARIANTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });

    console.log(`Navigating to http://localhost:3000/${path} ...`);
    await page.goto(`http://localhost:3000/${path}`, { waitUntil: 'networkidle0' });

    // Wait a bit for animations
    await new Promise(r => setTimeout(r, 2000));

    // Clean up the DOM to leave ONLY the resume, preventing empty pages
    await page.evaluate(() => {
      const resume = document.getElementById('cv-print-area');
      document.body.innerHTML = '';
      document.body.appendChild(resume);
    });

    await page.addStyleTag({ content: `
      body { background: white !important; margin: 0 !important; padding: 0 !important; }
      #cv-print-area {
        display: flex !important;
        position: relative !important;
        width: 210mm !important;
        height: 297mm !important;
        overflow: hidden !important;
        margin: 0 !important;
      }
    `});

    console.log(`Generating ${filename} ...`);
    await page.pdf({
      path: `public/${filename}`,
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log(`PDF generated at public/${filename}`);
    await page.close();
  }
}

// CV ATS : PDF texte (pas d'image), marges et pagination gérées par le CSS d'impression (@page ats).
for (const { path, filename } of ATS_VARIANTS) {
  const page = await browser.newPage();
  console.log(`Navigating to http://localhost:3000/${path} ...`);
  await page.goto(`http://localhost:3000/${path}`, { waitUntil: 'networkidle0' });

  console.log(`Generating ${filename} ...`);
  await page.pdf({
    path: `public/${filename}`,
    preferCSSPageSize: true,
    printBackground: false
  });

  console.log(`PDF generated at public/${filename}`);
  await page.close();
}

await browser.close();
