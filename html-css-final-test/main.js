let animationTargets = document.querySelectorAll(".animation-target");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    }
  });
});

animationTargets.forEach((trgt) => {
  observer.observe(trgt);
});
