/* Resume interactions — vanilla JS only */

document.addEventListener('DOMContentLoaded', () => {
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Existing visit notification (errors swallowed — no console noise)
  const notifyVisit = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json?token=c1452d141197e8');
      if (!response.ok) return;

      const IPData = await response.json();
      const emailData = {
        email: 'hassansaif0ki@gmail.com',
        message: `A visitor from IP address ${IPData.ip}, city ${IPData.city}, region ${IPData.region}, country ${IPData.country} viewed your Resume.`
      };

      await fetch('https://formspree.io/f/mrbzzlev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData)
      });
    } catch {
      // Network failures are non-critical for page use
    }
  };

  notifyVisit();
});
