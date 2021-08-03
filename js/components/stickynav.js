export const createStickyNavObserver = (
  root,
  rootMargin,
  treshHold,
  navbar,
  cssClass
) => {
  const observerAPI = new IntersectionObserver(
    function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        navbar.classList.add(cssClass);
      } else {
        navbar.classList.remove(cssClass);
      }
    },
    {
      root: root,
      rootMargin: rootMargin,
      threshold: treshHold,
    }
  );

  return observerAPI;
};
