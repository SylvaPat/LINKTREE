import slack from "./img/slack-icon.jpg";
import github from "./img/github-icon.png";

export default function Links() {
  return (
    <div className="links">
      <br />
      <a href="https://twitter.com/patsylva16" id="twitter">
        Twitter Link
      </a>
      <br />
      <br />

      <a href="https://training.zuri.team/" id="btn__zuri">
        Zuri Team
      </a>
      <br />
      <br />

      <a href="http://books.zuri.team" id="books">
        Zuri Books
      </a>
      <br />
      <br />

      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=Yussassiph"
        id="book__python"
      >
        Python Books
      </a>
      <br />
      <br />

      <a href="https://background.zuri.team" id="pitch">
        Background Check for Coders
      </a>
      <br />
      <br />

      <a href="https://books.zuri.team/design-rules" id="book__design">
        Design Books
      </a>
      <br />
      <br />

      <div className="social-icon">
        <a href="https://hng9.slack.com/sylvapat">
          <img src={slack} alt="slack-icon" id="slack_icon" />
        </a>
        <a href="https://github.com/SylvaPat">
          <img src={github} alt="github-icon" id="github_icon" />
        </a>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
