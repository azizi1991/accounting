/* =========================================
   ۱. مدیریت منوی هدر و دراپ‌داون پروفایل
========================================= */
const navItems = document.querySelectorAll('.nav-item');
const userMenuWrapper = document.getElementById('userMenuWrapper');
const userBtn = document.getElementById('userBtn');

if (navItems.length > 0) {
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      navItems.forEach(btn => btn.classList.remove('active'));
      item.classList.add('active');

      if (userBtn && item === userBtn && userMenuWrapper) {
        e.stopPropagation();
        userMenuWrapper.classList.toggle('open');
      } else if (userMenuWrapper) {
        userMenuWrapper.classList.remove('open');
      }
    });
  });
}

document.addEventListener('click', (e) => {
  if (userMenuWrapper && !userMenuWrapper.contains(e.target)) {
    userMenuWrapper.classList.remove('open');
  }
});

/* =========================================
   ۲. اسلایدر دوره‌های آکادمی
========================================= */
const coursesData = [
  {
    img: 'poster1.png',
    title: 'دوره جامع استانداردهای بین‌المللی حسابداری',
    desc: 'بررسی جامع و کاربردی جدیدترین استانداردهای حسابداری مالی و گزارشگری با رویکرد ورود به بازار کار حرفه‌ای و ارتقای مهارت‌های تحلیلگری سازمانی توسط آکادمی منتشر شد.'
  },
  {
    img: 'poster2.png',
    title: 'دوره تخصصی حسابداری مدیریت و بهای تمام‌شده',
    desc: 'آموزش کاربردی مدل‌های تصمیم‌گیری مالی، کنترل هزینه‌ها، بودجه‌ریزی عملیاتی و تکنیک‌های نوین مدیریت بهای تمام‌شده برای مدیران و مشاوران مالی.'
  },
  {
    img: 'poster3.png',
    title: 'کارگاه حسابرسی داخلی و ارزیابی ریسک مالی',
    desc: 'آشنایی کامل با چارچوب‌های کنترل داخلی، کشف تقلب، استانداردهای روز حسابرسی و نحوه تهیه گزارش‌های تحلیلی برای هیئت‌مدیره و سازمان‌ها.'
  }
];

const courseImg = document.getElementById('courseImg');
const courseTitle = document.getElementById('courseTitle');
const courseDesc = document.getElementById('courseDesc');
const bullets = document.querySelectorAll('.slider-bullet');
let currentIndex = 0;
let autoSlideInterval;

function renderCourse(index) {
  if (!courseImg || !courseTitle || !courseDesc) return;
  
  currentIndex = index;
  courseImg.style.opacity = '0';
  
  setTimeout(() => {
    courseImg.src = coursesData[index].img;
    courseTitle.textContent = coursesData[index].title;
    courseDesc.textContent = coursesData[index].desc;
    courseImg.style.opacity = '1';
  }, 180);

  bullets.forEach((b, idx) => {
    b.classList.toggle('active', idx === index);
  });
}

if (bullets.length > 0) {
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      renderCourse(index);
      restartAutoSlide();
    });
  });
}

function restartAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    const next = (currentIndex + 1) % coursesData.length;
    renderCourse(next);
  }, 5000);
}

// شروع اسلاید خودکار دوره‌ها
restartAutoSlide();

/* =========================================
   ۳. مقالات کرکره‌ای (Civilica & Papers)
========================================= */
const articlesData = [
  {
    title: 'بررسی رابطه بین جریان‌های نقد آزاد و نقدشوندگی سهام در بورس اوراق بهادار تهران',
    venue: 'اولین کنفرانس بین‌المللی مدیریت، حسابداری، علوم تربیتی و اقتصاد',
    authors: 'میلاد اثنی عشری، علیرضا مشایخی',
    year: '۱۳۹۹',
    pages: '۱۲ صفحه'
  },
  {
    title: 'تأثیر افشای مسئولیت اجتماعی شرکت‌ها بر هزینه سرمایه و عملکرد مالی',
    venue: 'سومین همایش ملی پژوهش‌های کاربردی در حسابداری و مدیریت',
    authors: 'میلاد اثنی عشری، سارا محمدی',
    year: '۱۴۰۱',
    pages: '۱۴ صفحه'
  },
  {
    title: 'نقش هوش تجاری و تحلیل داده‌های کلان در بهبود کیفیت حسابرسی مالیاتی',
    venue: 'کنفرانس ملی نوآوری و فناوری در علوم مالی و اقتصاد دیجیتال',
    authors: 'میلاد اثنی عشری، حمیدرضا کریمی',
    year: '۱۴۰۲',
    pages: '۱۰ صفحه'
  },
  {
    title: 'بررسی تأثیر حاکمیت شرکتی بر محافظه‌کاری شرطی و مدیریت سود',
    venue: 'پنجمین کنفرانس بین‌المللی حسابداری، مدیریت و نوآوری در کسب‌وکار',
    authors: 'میلاد اثنی عشری، نرگس حسینی',
    year: '۱۴۰۲',
    pages: '۱۶ صفحه'
  }
];

const shutterContainer = document.getElementById('shutterContainer');
const civilicaSearchUrl = 'https://civilica.com/search/paper/n-%D9%85%DB%8C%D9%84%D8%A7%D8%AF_%D8%A7%D8%AB%D9%86%DB%8C%20%D8%B9%D8%B4%D8%B1%DB%8C/';

if (shutterContainer) {
  shutterContainer.innerHTML = ''; // پاک‌سازی اولیه
  
  articlesData.forEach((art, index) => {
    const blade = document.createElement('div');
    blade.className = `shutter-blade ${index === 0 ? 'active' : ''}`;

    blade.innerHTML = `
      <div class="blade-spine">
        <span class="blade-num">۰${index + 1}</span>
        <span class="blade-vertical-title">${art.title}</span>
        <i class="fa-solid fa-chevron-left"></i>
      </div>

      <div class="blade-content">
        <div>
          <span class="art-badge-top">
            <i class="fa-solid fa-scroll"></i> ${art.venue}
          </span>
          <h3 class="art-full-title">${art.title}</h3>
          <p class="art-authors">
            <i class="fa-solid fa-users"></i> ${art.authors}
          </p>
        </div>

        <div class="art-footer-row">
          <span class="art-year-tag">
            <i class="fa-regular fa-calendar"></i> سال انتشار: ${art.year} (${art.pages})
          </span>
          <a href="${civilicaSearchUrl}" target="_blank" class="art-btn-link">
            مشاهده در سیویلیکا <i class="fa-solid fa-arrow-left"></i>
          </a>
        </div>
      </div>
    `;

    blade.addEventListener('mouseenter', () => {
      document.querySelectorAll('.shutter-blade').forEach(b => b.classList.remove('active'));
      blade.classList.add('active');
    });

    blade.addEventListener('click', () => {
      document.querySelectorAll('.shutter-blade').forEach(b => b.classList.remove('active'));
      blade.classList.add('active');
    });

    shutterContainer.appendChild(blade);
  });
}

/* =========================================
   ۴. تنظیم داینامیک سال در فوتر
========================================= */
const currentYear = document.getElementById('currentYear');
if (currentYear) {
  currentYear.textContent = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric'
  }).format(new Date());
}
