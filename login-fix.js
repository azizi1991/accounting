(() => {
  const $ = id => document.getElementById(id);
  let fa = true;
  let signup = false;

  const copy = {
    fa: {
      eyebrow: 'خوش آمدید',
      titleLogin: 'ورود به حساب کاربری',
      titleSignup: 'ساخت حساب کاربری',
      subtitleLogin: 'برای ادامه یادگیری وارد شوید.',
      subtitleSignup: 'در چند ثانیه حساب خود را بسازید.',
      login: 'ورود',
      signup: 'ثبت‌نام',
      name: 'نام و نام خانوادگی',
      email: 'ایمیل',
      password: 'رمز عبور',
      namePlaceholder: 'نام شما',
      emailPlaceholder: 'you@example.com',
      passwordPlaceholder: 'حداقل ۸ کاراکتر',
      forgot: 'رمز عبور را فراموش کرده‌اید؟',
      submitLogin: 'ورود به پنل',
      submitSignup: 'ساخت حساب',
      switchLogin: 'حساب کاربری ندارید؟',
      switchSignup: 'قبلاً ثبت‌نام کرده‌اید؟',
      switchToLogin: 'ورود',
      switchToSignup: 'ثبت‌نام کنید',
      home: 'بازگشت به صفحه اصلی',
      heroBrand: 'دکتر میلاد اثنی عشری',
      heroSub: 'پژوهش، یادگیری، پیشرفت',
      heroEyebrow: 'ACCOUNTING / RESEARCH / PRACTICE',
      heroTitle: 'دانش خود را به یک مزیت حرفه‌ای تبدیل کنید.',
      heroText: 'به دوره‌های تخصصی، مسیر پیشرفت و جامعه یادگیرندگان حسابداری دسترسی پیدا کنید.',
      copyright: '© ۱۴۰۵ آکادمی اثنی عشری'
    },
    en: {
      eyebrow: 'WELCOME BACK',
      titleLogin: 'Sign in to your account',
      titleSignup: 'Create your account',
      subtitleLogin: 'Sign in to continue learning.',
      subtitleSignup: 'Join the learning community in seconds.',
      login: 'Sign in',
      signup: 'Sign up',
      name: 'Full name',
      email: 'Email',
      password: 'Password',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      passwordPlaceholder: 'At least 8 characters',
      forgot: 'Forgot your password?',
      submitLogin: 'Sign in',
      submitSignup: 'Create account',
      switchLogin: 'New here?',
      switchSignup: 'Already have an account?',
      switchToLogin: 'Sign in',
      switchToSignup: 'Create one',
      home: 'Back to homepage',
      heroBrand: 'Dr. Milad Asnaei Ashrafi',
      heroSub: 'Research, learning, progress',
      heroEyebrow: 'ACCOUNTING / RESEARCH / PRACTICE',
      heroTitle: 'Turn your knowledge into a professional advantage.',
      heroText: 'Access specialist courses, a clear path forward and a community of accounting learners.',
      copyright: '© 2026 Asnaei Academy'
    }
  };

  function render() {
    const t = fa ? copy.fa : copy.en;
    document.documentElement.lang = fa ? 'fa' : 'en';
    document.documentElement.dir = fa ? 'rtl' : 'ltr';
    document.title = fa ? 'ورود و ثبت‌نام | آکادمی اثنی عشری' : 'Sign in | Asnaei Academy';
    $('languageToggle').textContent = fa ? 'EN' : 'FA';
    $('eyebrow').textContent = t.eyebrow;
    $('title').textContent = signup ? t.titleSignup : t.titleLogin;
    $('subtitle').textContent = signup ? t.subtitleSignup : t.subtitleLogin;
    $('loginTab').textContent = t.login;
    $('signupTab').textContent = t.signup;
    $('nameLabel').textContent = t.name;
    $('emailLabel').textContent = t.email;
    $('passwordLabel').textContent = t.password;
    $('nameField').placeholder = t.namePlaceholder;
    document.querySelector('input[type="email"]').placeholder = t.emailPlaceholder;
    document.querySelector('input[type="password"]').placeholder = t.passwordPlaceholder;
    $('forgot').querySelector('a').textContent = t.forgot;
    $('submitButton').textContent = signup ? t.submitSignup : t.submitLogin;
    $('homeLink').textContent = t.home;
    $('homeLink').href = fa ? 'homepage_fa.html' : 'homepage.html';
    $('nameField').classList.toggle('hidden', !signup);
    $('nameLabel').classList.toggle('hidden', !signup);
    $('forgot').classList.toggle('hidden', signup);
    $('loginTab').className = signup ? 'flex-1 rounded-lg py-2.5 text-sm text-slate' : 'flex-1 rounded-lg bg-white shadow-sm py-2.5 text-sm font-medium';
    $('signupTab').className = signup ? 'flex-1 rounded-lg bg-white shadow-sm py-2.5 text-sm font-medium' : 'flex-1 rounded-lg py-2.5 text-sm text-slate';
    $('switchText').innerHTML = `${signup ? t.switchSignup : t.switchLogin} `;
    const switchButton = document.createElement('button');
    switchButton.className = 'text-brass';
    switchButton.textContent = signup ? t.switchToLogin : t.switchToSignup;
    switchButton.onclick = () => { signup = !signup; render(); };
    $('switchText').appendChild(switchButton);

    const hero = document.querySelector('section.relative.hidden');
    if (hero) {
      const links = hero.querySelectorAll('a');
      if (links[0]) links[0].textContent = t.heroBrand;
      const heroSub = hero.querySelector('div.relative.z-10 p');
      if (heroSub) heroSub.textContent = t.heroSub;
      const heroText = hero.querySelector('div.relative.z-10.max-w-md');
      if (heroText) {
        const p = heroText.querySelector('p:last-child');
        const h = heroText.querySelector('h1');
        const eyebrow = heroText.querySelector('p:first-child');
        if (eyebrow) eyebrow.textContent = t.heroEyebrow;
        if (h) h.textContent = t.heroTitle;
        if (p) p.textContent = t.heroText;
      }
      const copyright = hero.querySelector('p.relative');
      if (copyright) copyright.textContent = t.copyright;
    }
    const mobileBrand = document.querySelector('section.p-6 a.lg\\:hidden');
    if (mobileBrand) mobileBrand.textContent = t.heroBrand;
  }

  $('languageToggle')?.addEventListener('click', () => { fa = !fa; render(); });
  $('loginTab')?.addEventListener('click', () => { signup = false; render(); });
  $('signupTab')?.addEventListener('click', () => { signup = true; render(); });
  $('authForm')?.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = 'user_dashboard.html';
  });
  render();
})();
