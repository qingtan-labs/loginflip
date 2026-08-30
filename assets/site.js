(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-language-toggle]');
  const page = document.body.dataset.page || 'home';
  const pageMeta = {
    home: {
      en: ['LoginFlip — Local Multi-Account Session Switcher', 'Switch website accounts in seconds. LoginFlip keeps session snapshots on your device, with encrypted backups and no tracking.'],
      zh: ['LoginFlip — 本地多账号登录切换器', '几秒切换网站账号。LoginFlip 将登录快照保存在本机，支持加密备份，不跟踪、不上传。']
    },
    privacy: {
      en: ['Privacy Policy — LoginFlip', 'How LoginFlip processes login-state snapshots locally on your device.'],
      zh: ['隐私政策 — LoginFlip', 'LoginFlip 如何在你的设备本机处理登录状态快照。']
    },
    support: {
      en: ['Support — LoginFlip', 'Help, compatibility, troubleshooting, and contact information for LoginFlip.'],
      zh: ['支持 — LoginFlip', 'LoginFlip 的使用帮助、兼容性、故障排查与联系方式。']
    }
  };

  function preferredLanguage() {
    const saved = localStorage.getItem('loginflip-site-language');
    if (saved === 'en' || saved === 'zh') return saved;
    return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  }

  function applyLanguage(language) {
    const lang = language === 'zh' ? 'zh' : 'en';
    root.dataset.lang = lang;
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('loginflip-site-language', lang);

    if (toggle) {
      toggle.textContent = lang === 'zh' ? 'EN' : '中文';
      toggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为简体中文');
    }

    document.querySelectorAll('[data-en-src][data-zh-src]').forEach((image) => {
      image.src = lang === 'zh' ? image.dataset.zhSrc : image.dataset.enSrc;
      image.alt = lang === 'zh' ? image.dataset.altZh : image.dataset.altEn;
    });

    const meta = (pageMeta[page] || pageMeta.home)[lang];
    document.title = meta[0];
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta[1]);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta[0]);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta[1]);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', `https://qingtan-labs.github.io/loginflip/assets/promo-${lang}.png`);
  }

  toggle?.addEventListener('click', () => applyLanguage(root.dataset.lang === 'zh' ? 'en' : 'zh'));
  document.querySelectorAll('[data-current-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });
  applyLanguage(preferredLanguage());
})();
