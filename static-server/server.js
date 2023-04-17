const http = require("http");
const path = require("path");
const fs = require("fs/promises");

const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
  let resource = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  try {
    await fs.access(resource, fs.constants.F_OK | fs.constants.R_OK);
  } catch {
    resource = path.join(__dirname, "public", "404.html");
  }

  sendResource(res, resource);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/**
 *
 * @param {http.ServerResponse<http.IncomingMessage>} res
 * @param {string} resourcePath
 */
async function sendResource(res, resourcePath) {
  try {
    const content = await fs.readFile(resourcePath, "utf-8");
    res.statusCode = 200;
    res.end(content);
  } catch (error) {
    res.statusCode = 500;
    res.end();
  }
}
