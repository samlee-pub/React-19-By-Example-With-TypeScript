/**
 * This component demonstrates a form with multiple file upload using React Hook Form.
 * It includes file type and size validation, as well as a preview of selected files.
 * When the form is submitted, it alerts the user with the names and sizes of the selected files.
 * If there are validation errors, it displays appropriate error messages.
 * The component uses useState to manage the list of selected files and allows users to remove files before submission.
 */
import { useForm, type FieldErrors } from "react-hook-form";
import { useState } from "react";

interface FormData {
  files: FileList;
}

export function FormWithMultiFileUpload() {
  const {
    register,
    handleSubmit,
    //trigger,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const [fileList, setFileList] = useState([] as File[]);

  const onValid = () => {
    if (fileList.length === 0) {
      alert("Please select at least one file");
      return;
    }
    let message = "";
    fileList.forEach((file, index) => {
      message += `File ${index + 1}: ${file.name} (${file.size} bytes)\n`;
    });
    alert(message);
  };

  const onErrors = (errors: FieldErrors<FormData>) => {
    let message = "";
    Object.entries(errors).forEach(([key, value]) => {
      message += `${key}: ${value.message}\n`;
    });
    alert(message);
  };

  const onSubmit = (e: React.FormEvent) => {
    void handleSubmit(onValid, onErrors)(e);
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    if (validateAllowedTypes(files) !== true) return;
    if (maxSize(files) !== true) return;
    setFileList((pre) => [...pre, ...Array.from(files)]);
  };

  // Remove a file from the selection
  const removeFile = (index: number) => {
    const newFileList = fileList.filter((_, i) => i !== index);
    setFileList(newFileList);
  };
  const validateAllowedTypes = (files: FileList) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        return "Only JPEG, PNG, and PDF files are allowed";
      }
    }
    return true;
  };

  const maxSize = (files: FileList) => {
    for (const file of files) {
      if (file.size > 5 * 1024 * 1024) {
        return "File size must be less than 5MB";
      }
    }
    return true;
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", color: "#333" }}>
        Form With Multiple File Upload
      </h3>
      <form onSubmit={onSubmit} className="my-form" noValidate>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="file"
            multiple
            {...register("files", {
              validate: {
                maxSize,
                validateAllowedTypes,
              },
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                //void trigger("files");
                handleFileChange(e);
              },
            })}
            className="my-input same-width-input"
          />
          {errors.files && (
            <div>
              <span
                className="error"
                style={{ color: "red", fontSize: "14px" }}
              >
                {errors.files.message}
              </span>
            </div>
          )}
        </div>

        {/* File previews */}
        {fileList.length > 0 && (
          <div style={{ marginBottom: "15px" }}>
            <h4 style={{ marginBottom: "10px" }}>Selected Files:</h4>
            {fileList.map((file, index) => (
              <div
                key={`${file.name}-${file.size}-${file.lastModified}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  marginBottom: "5px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <span>
                  {file.name} ({file.size} bytes)
                </span>
                <button
                  type="button"
                  onClick={() => {
                    removeFile(index);
                  }}
                  style={{
                    background: "#ff4d4d",
                    color: "white",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="my-button same-width-input"
          style={{ backgroundColor: "#4CAF50", color: "white" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
