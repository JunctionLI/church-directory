export default function BibleVerse({ bibleVerse }) {

    const{
        reference,
        text,
    } = bibleVerse;



    return (
      <div className="mx-20 my-10 p-5 bg-blue-400 rounded">
          <div className="p-4 bg-white text-blue-800 rounded shadow">
            <h4 className="text-lg font-semibold">Bible Verse</h4>
            <p><strong>Reference:</strong> {bibleVerse.reference}</p>
            <p><strong>Verse:</strong> {bibleVerse.text}</p>
          </div>
      </div>
    );
  }
  