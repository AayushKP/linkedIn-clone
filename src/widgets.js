import { FiberManualRecord, Info } from "@mui/icons-material";
import "./Widgets.css";

function widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("Steve Jobs is dead", "Top news - 999 readers")}
      {newsArticle("Skill development a top priority", "999 readers")}
      {newsArticle("IT giants on acquisition spree", "999 readers")}
      {newsArticle("How India is spending", "999 readers")}
      {newsArticle("EV firms to rev up pay hikes", "999 readers")}
      {newsArticle("Raghuram Rajan on regulation", "999 viewers")}
      {newsArticle("Grooming women CEOs in finance", "999 readers")}
      {newsArticle("More women look to study abroad", "999 readers")}
    </div>
  );
}
export default widgets;
