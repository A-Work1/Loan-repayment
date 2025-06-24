  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    let currentSection = "";

    // لو المستخدم فوق خالص (أعلى من أول قسم)
    if (window.scrollY < 200) {
      currentSection = "hero"; // الـ ID بتاع قسم البطل (الرئيسية)
    } else {
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
          currentSection = section.getAttribute("id");
        }
      });
    }

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

// ///////////////////////////////////////////////////////////////////////
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;

    // قفل الباقي
    document.querySelectorAll(".accordion-body").forEach(b => {
      if (b !== body) {
        b.classList.remove("open");
        b.previousElementSibling.classList.remove("active"); // يشيل active من الزر
      }
    });

    // فتح أو غلق الحالي
    body.classList.toggle("open");
    header.classList.toggle("active");
  });
});
// ///////////////////////////////////////////////////////////////////////
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("successPopup");
  const loading = document.getElementById("popupLoading");
  const message = document.getElementById("popupMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // افتح البوب أب وأعرض اللودر
    popup.classList.add("show");
    loading.style.display = "flex";
    message.style.display = "none";

    const formData = new FormData(form);

    fetch("https://formsubmit.co/1no14172016@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        // أخفي اللودر واظهر رسالة النجاح
        loading.style.display = "none";
        message.style.display = "block";
      } else {
        loading.style.display = "none";
        alert("❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
        popup.classList.remove("show");
      }
    })
    .catch(error => {
      console.error(error);
      loading.style.display = "none";
      alert("❌ خطأ في الاتصال، تحقق من الشبكة.");
      popup.classList.remove("show");
    });
  });

  function closePopup() {
    popup.classList.remove("show");
  }
///////////////////////////////////////////////////////////////////////
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.getElementById('burger');

    navLinks.classList.toggle('show');
    burger.classList.toggle('active');
  }
