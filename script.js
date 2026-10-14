/**
 * Avni Bindal - Personal Portfolio
 * JavaScript Interactions: Light/Dark Theme, Smooth Nav, Scroll Reveal,
 * Downloadable Summary, and Contact Helpers.
 */

document.addEventListener('DOMContentLoaded', () => {

  // -------------------------------------------------------------------------
  // 1. Theme Management (Light / Dark Mode with Persistence)
  // -------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  // Retrieve saved preference or check OS preference
  const savedTheme = localStorage.getItem('avni_portfolio_theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('avni_portfolio_theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', `Current theme is ${theme}. Click to switch.`);
    }
  }


  // -------------------------------------------------------------------------
  // 2. Mobile Navigation Toggle
  // -------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking any nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (event) => {
      if (!navLinks.contains(event.target) && !mobileToggle.contains(event.target)) {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  // -------------------------------------------------------------------------
  // 3. Active Section Link Indicator on Scroll
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-links .nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        allNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();


  // -------------------------------------------------------------------------
  // 4. Scroll Reveal Animations
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }


  // -------------------------------------------------------------------------
  // 5. Download Portfolio Summary Feature & Modal
  // -------------------------------------------------------------------------
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadModal = document.getElementById('downloadModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const optDownloadTxt = document.getElementById('optDownloadTxt');
  const optPrintPdf = document.getElementById('optPrintPdf');

  window.openDownloadModal = function() {
    if (downloadModal) {
      downloadModal.classList.add('active');
      downloadModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  function closeDownloadModal() {
    if (downloadModal) {
      downloadModal.classList.remove('active');
      downloadModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', window.openDownloadModal);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeDownloadModal);
  }

  if (modalDismissBtn) {
    modalDismissBtn.addEventListener('click', closeDownloadModal);
  }

  if (downloadModal) {
    downloadModal.addEventListener('click', (e) => {
      if (e.target === downloadModal) {
        closeDownloadModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && downloadModal && downloadModal.classList.contains('active')) {
      closeDownloadModal();
    }
  });

  // Action 1: Download text summary file
  if (optDownloadTxt) {
    optDownloadTxt.addEventListener('click', () => {
      closeDownloadModal();
      downloadSummaryTextFile();
      showToast('Downloading Portfolio Summary (.txt)...');
    });
  }

  // Action 2: Trigger Print / PDF Export
  if (optPrintPdf) {
    optPrintPdf.addEventListener('click', () => {
      closeDownloadModal();
      setTimeout(() => {
        window.print();
      }, 300);
    });
  }

  // Function to create and download the text summary file
  function downloadSummaryTextFile() {
    const summaryText = `========================================================================
AVNI BINDAL | PORTFOLIO SUMMARY
First-Year B.Tech Computer Science Engineering Student
JECRC University, Jaipur, Rajasthan, India
========================================================================

CONTACT & PROFILES
------------------------------------------------------------------------
- Email:    your.email@example.com (Editable Placeholder)
- LinkedIn: https://www.linkedin.com/in/avni-bindal-81b0b8428 (Verified Profile)
- GitHub:   https://github.com/avni26bcon2120-ai (Verified Profile)
- Location: JECRC University Campus, Jaipur, Rajasthan, India

ABOUT ME
------------------------------------------------------------------------
First-year B.Tech CSE undergraduate at JECRC University, Jaipur.
Curious, motivated, and passionate about software fundamentals,
creative web layouts, and building solid analytical skills.

EDUCATION (Academic Profile)
------------------------------------------------------------------------
- Degree:           Bachelor of Technology (B.Tech)
- Branch / Major:   Computer Science & Engineering (CSE)
- University:       JECRC University, Jaipur, Rajasthan, India
- Current Semester: Semester 1 (1st Year, Batch 2024 - 2028)
- Department:       School of Engineering

First-Year Coursework Highlights:
- Problem Solving with C Programming (Logic, Loops, Arrays, Functions)
- Digital Literacy & Technical Documentation
- Engineering Mathematics (Calculus, Linear Algebra, Discrete Basics)
- Computing Laboratories & GCC Terminal Exercises

SKILLS (Beginner & Foundational Level)
------------------------------------------------------------------------
- Programming:        C Language (Variables, loops, arrays, functions)
- Web Fundamentals:   HTML5, CSS3, JavaScript (DOM, Events - Beginner)
- Tools & Workflow:   VS Code, GCC Compiler, Command Line, Git Basics
- Professional/Soft:  Teamwork, Communication, Problem Solving, Curiosity

STUDENT PROJECTS
------------------------------------------------------------------------
1. Personal Academic Portfolio (DL-Portfolio)
   - Built a responsive personal portfolio using semantic HTML, CSS, and
     vanilla JavaScript with light/dark theme toggle and print support.
   - Serves as the digital showcase for first-year coursework.

2. Real-Time Airfare Price Index (Student Hackathon Project)
   - Conceived in a student hackathon team to monitor flight price trends.
   - Contributed to problem framing, prototype presentation, and data
     index concepts to assist travelers in identifying budget windows.

3. Upcoming Semester Mini-Project (Planned)
   - Planned C console utility exploring basic data structures and
     file handling logic.

ACHIEVEMENTS & ACTIVITIES
------------------------------------------------------------------------
- Hackathon Participation: Built Real-Time Airfare Price Index prototype
  with a peer team. [Editable: Add specific hackathon name and date]
- Academic Milestone: Successfully completed first-semester C programming
  coursework and lab exercises at JECRC University.
- Course Presentation: Delivered Digital Literacy coursework showcase.

------------------------------------------------------------------------
Generated from Avni Bindal's Personal Portfolio Website.
Built with HTML5, CSS3, and JavaScript.
========================================================================`;

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Avni_Bindal_Portfolio_Summary.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }


  // -------------------------------------------------------------------------
  // 6. Copy Email Button
  // -------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailPlaceholderText = document.getElementById('emailPlaceholderText');

  if (copyEmailBtn && emailPlaceholderText) {
    copyEmailBtn.addEventListener('click', () => {
      const emailToCopy = emailPlaceholderText.textContent.trim();
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailToCopy).then(() => {
          showCopySuccess();
        }).catch(() => {
          fallbackCopyText(emailToCopy);
        });
      } else {
        fallbackCopyText(emailToCopy);
      }
    });
  }

  function showCopySuccess() {
    const copyTextSpan = copyEmailBtn.querySelector('.copy-text');
    if (copyTextSpan) {
      const originalText = copyTextSpan.textContent;
      copyTextSpan.textContent = 'Copied!';
      setTimeout(() => {
        copyTextSpan.textContent = originalText;
      }, 2000);
    }
    showToast('Email address copied to clipboard!');
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showCopySuccess();
    } catch (err) {
      showToast('Could not copy automatically. Please copy manually.');
    }
    document.body.removeChild(textArea);
  }

  // -------------------------------------------------------------------------
  // 6b. Social Links Placeholder Helper
  // -------------------------------------------------------------------------
  const placeholderLinks = document.querySelectorAll('#linkedinButton, #githubButton');
  placeholderLinks.forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      if (href.includes('YOUR-LINKEDIN-USERNAME') || href.includes('YOUR-GITHUB-USERNAME')) {
        showToast('Opening placeholder link. Replace href in index.html with your verified URL!');
      }
    });
  });

  // -------------------------------------------------------------------------
  // 7. Interactive Contact Form (Demo)
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const senderName = nameInput ? nameInput.value.trim() : 'Friend';

      // Provide clear student-friendly feedback
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `
        <strong>Thank you, ${escapeHtml(senderName)}!</strong><br>
        Your test message was received locally. Since this is a static showcase, please copy Avni's email address above to get in touch directly!
      `;

      contactForm.reset();
      showToast('Message submitted locally!');

      setTimeout(() => {
        formFeedback.className = 'form-feedback hidden';
      }, 8000);
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }


  // -------------------------------------------------------------------------
  // 8. Back to Top Button & Footer Year
  // -------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }


  // -------------------------------------------------------------------------
  // 9. Toast Notification Helper
  // -------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('visible');

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3200);
  }

});
