exports.pageNotFound = (req, res, next) => {
  res.status(404).render("404", {
    pagetitle: "page not found",
    currentPage: "404",
  });
};
