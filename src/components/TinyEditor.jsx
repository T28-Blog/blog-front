import React from "react";
import tinymce from "tinymce/tinymce";
import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/table";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.min.css";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyEditor({
  contentEditor,
  setContentEditor,
  onlyText,
  setOnlyText,
}) {
  const handleEditorChange = (content, editor) => {
    setContentEditor(content);
  };
  return (
    <>
      <Editor
        id="textArea"
        init={{
          skin: false,
          content_css: false,
          width: "100%",
          height: 600,
          menubar: false,
          language: "ko_KR",
          language_url: "/langs/ko_KR.js",
          plugins: ["link image", "table paste"],
          content_style: "body {font-family: Arial}",
          file_picker_types: "file image media",
          toolbar:
            // eslint-disable-next-line no-multi-str
            "undo redo | styleselect | fontselect | bold italic | alignleft aligncenter alignright alignjustify | image",
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.onchange = function () {
              var file = this.files[0];
              var reader = new FileReader();
              reader.onload = function () {
                var id = "blobid" + new Date().getTime();
                var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(",")[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                cb(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };
            input.click();
          },
        }}
        value={contentEditor}
        onEditorChange={(newValue, editor) => {
          handleEditorChange(newValue);
          setOnlyText(editor.getContent({ format: "text" }));
        }}
        onInit={(evt, editor) => {
          setOnlyText(editor.getContent({ format: "text" }));
        }}
      />
    </>
  );
}
