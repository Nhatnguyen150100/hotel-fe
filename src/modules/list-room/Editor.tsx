import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";
import "quill/dist/quill.snow.css";
import { Button } from "antd";

const Editor = () => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} },
  });

  const [content, setContent] = useState(""); // State để lưu nội dung

  const handleSubmit = async () => {
    const currentContent = quill?.root.innerHTML;
    setContent(currentContent); // Cập nhật state với nội dung hiện tại
    console.log("🚀 ~ handleSubmit ~ content:", currentContent);
  };

  if (Quill && !quill) {
    Quill.register("modules/blotFormatter", BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        const currentContent = quill.root.innerHTML;
        setContent(currentContent); // Cập nhật state khi có thay đổi
      });
    }
  }, [quill, Quill]);

  return (
    <div>
      <div ref={quillRef} />
      <Button type="primary" onClick={handleSubmit}>
        Upload
      </Button>
      {/* Hiển thị preview nội dung */}
      <div className="preview">
        <h3>Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Editor;