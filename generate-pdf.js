import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set window size matching standard screen for media queries
  await page.setViewport({ width: 1200, height: 800 });
  
  console.log('Navigating to local portfolio server...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
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

  console.log('Generating PDF...');
  await page.pdf({
    path: 'public/resume.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });
  
  console.log('PDF generated at public/resume.pdf');
  await browser.close();
})();
