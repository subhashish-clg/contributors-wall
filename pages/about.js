export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl font-bold" id="contributor-wall">Contributor wall</h1>
      <p>
        A git repo/project that encourages beginner to learn <code>git</code>{" "}
        and <code>github</code>.
      </p>
      <h2 className="text-2xl font-bold"  id="adding-your-name-to-the-wall">Adding your name to the wall</h2>
      <h3 className="text-xl font-bold"  id="using-the-online-vs-code-editor">
        Using the online vs code editor
      </h3>
      <ol>
        <li>
          Go the repo
          <a href="https://github.com/subhashish-clg/contributors-wall">page</a>{" "}
        </li>
        <li>
          Press <kbd>.</kbd> on your keyboard. This will open a{" "}
          <code>vs code</code> like editor in your browser.
        </li>
        <li>
          Open the <code>data.csv</code> file and enter your name and bio and
          create a pull request.
        </li>
      </ol>
      <h3 className="text-xl font-bold"  id="by-cloning-the-repo">By cloning the repo</h3>
      <ol>
        <li>Fork this repository,</li>
        <li>Open a terminal and enter the following command:</li>
      </ol>
      <pre>
        <code class="lang-bash">
          git <span class="hljs-keyword">clone</span>{" "}
          <span class="hljs-title">&lt;forked-repo-link</span>&gt;
        </code>
      </pre>
      <ol>
        <li>The above command will create a copy on your local system.</li>
        <li>
          Open the <code>data.csv</code> file and enter your name and bio and
          create a pull request.
          <a href="https://opensource.com/article/19/7/create-pull-request-github">
            Learn how to make a pull request from here
          </a>
        </li>
      </ol>
      <p>
        After you pull requested is submitted you should see your name on the
        website.(Assuming nothing went wrong)
      </p>
    </>
  );
}
