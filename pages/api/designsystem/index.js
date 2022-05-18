export default async function handler(req, res) {
  res.status(200).json({
    test: "qsdqds",
    pages: [
      {
        label: "Introduction",
        url: "ds_introduction"
      },
      {
        label: "Colors",
        url: "ds_colors"
      },
      {
        label: "Colors",
        url: "ds_colors"
      }
    ]
  });
}
