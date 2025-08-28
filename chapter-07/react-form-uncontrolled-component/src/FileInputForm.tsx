/**
 * This component implements an uncontrolled file input.
 * It allows users to select files and displays file information on selection.
 */
import { useRef } from "react";

export function FileInputForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleFileChange = () => {
    const files = fileInputRef.current?.files;
    if (files && files.length > 0) {
      if (labelRef.current) {
        labelRef.current.innerText = `${files[0].name} (${files[0].size} bytes)`;
      }
    }
  };

  return (
    <div>
      <h3>Uncontrolled File Input</h3>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="my-input same-width-input"
      />

      <div className="my-box-border-1 text-left same-width-div">
        File selected:
        <span className="fg-blue" ref={labelRef}></span>
      </div>
    </div>
  );
}
