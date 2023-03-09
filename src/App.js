import { FixedPartOfDocument } from "./FixedPartOfDocument";
import { MainContent } from "./MainContent";
import { ALotOfContent } from "./ALotOfContent";
import { StickyRow } from "./StickyRow";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <FixedPartOfDocument>
        <Header/>
      </FixedPartOfDocument>
      <MainContent>
        <ALotOfContent />
        <ALotOfContent />
        <ALotOfContent />

        <StickyRow />

        <ALotOfContent />
        <ALotOfContent />

        <StickyRow />

        <ALotOfContent />
        <ALotOfContent />
        <ALotOfContent />
        <ALotOfContent />
        <ALotOfContent />
      </MainContent>
    </div>
  );
}

export default App;
