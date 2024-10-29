import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";
import "quill/dist/quill.snow.css";
import { Button } from "antd";

const Editor = () => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} },
  });

  const handleSubmit = async () => {
    // Lấy nội dung từ Quill
    const content = quill?.root.innerHTML;
    console.log("🚀 ~ handleSubmit ~ content:", content);
  };

  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register("modules/blotFormatter", BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldContents) => {
        console.log("Text change!");
        console.log(delta);

        const currrentContents = quill.getContents();
        console.log("🚀 ~ quill.on ~ currrentContents:", currrentContents);
      });
    }
  }, [quill, Quill]);

  return (
    <div>
      <div ref={quillRef} />
      <Button type="primary" onClick={handleSubmit}>
        upload
      </Button>
    </div>
  );
};

export default Editor;
