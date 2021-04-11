export default function Footer({ date, author }) {
  return (
    <div className="blog-detail-footer">
      <p className="lead mb-0">
        <img
          src={author?.avatar}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {author?.name}
        {', '} {date}
      </p>
      <p className="footer-text mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="footer-copyright text-center py-3">
        <p fluid>
          &copy; {new Date().getFullYear()} Copyright: We are friend co. All
          right reserved
        </p>
      </div>
      <div>
        <p> Component Icons should be replaced here</p>
      </div>
    </div>
  );
}
