export const PORTFOLIO_ITEMS = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Item #${i + 1}`,
  image: "/assets/portfolio-sample.png",
}));
