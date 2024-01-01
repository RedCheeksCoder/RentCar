import PagesContainer from "./PagesContainer";
import ModelsContent from "./ModelsContent";
function About() {
  return (
    <PagesContainer title={"Vehicle Models"} content={<ModelsContent />} />
  );
}

export default About;
