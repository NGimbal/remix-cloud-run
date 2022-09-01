export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix served from Google Cloud Run!</h1>
      <ul>
      <li>
          <a
            target="_blank"
            href="https://gist.github.com/TheRealFlyingCoder/80556cb29463ae3d2b424f61e8e5830d"
            rel="noreferrer"
          >
            Remix in Google Cloud run Gist
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service#remove_your_test_project"
            rel="noreferrer"
          >
            Deploy a Node app to Cloud Run
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
