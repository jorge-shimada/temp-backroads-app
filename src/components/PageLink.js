// const PageLink = ({ href, text, itemClass }) => {
const PageLink = ({ link, itemClass }) => {
  //   const { href, text } = link;
  //   console.log(itemClass, href, text);
  return (
    <li>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  );
};
export default PageLink;
