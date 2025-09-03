/**
 * A form component that includes file upload fields using react-hook-form.
 * The form includes fields for name, email, a document upload (PDF, DOC), and a picture upload (image files).
 * When the form is submitted, it alerts the user with the form data, including file names and sizes.
 * If the form is invalid, it displays error messages next to the respective fields.
 */
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  document: FileList;
  picture: FileList;
};

export function FormWithFileUpload() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onValid = (data: FormValues) => {
    let message = "";
    if (data.name) message += `Name: ${data.name}\n`;
    if (data.email) message += `Email: ${data.email}\n`;
    if (data.document && data.document.length > 0) {
      message += `Document: ${data.document[0].name} (${data.document[0].size} bytes)\n`;
    }
    if (data.picture && data.picture.length > 0) {
      message += `Picture: ${data.picture[0].name} (${data.picture[0].size} bytes)\n`;
    }
    if (message) {
      alert(message);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    void handleSubmit(onValid)(e);
  };
  return (
    <div>
      <h3>Form With File Upload</h3>
      <form onSubmit={onSubmit} className="my-form" noValidate>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="my-input same-width-input"
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Email"
          className="my-input same-width-input"
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <div className="file-upload-group">
          <label>Document (PDF, DOC):</label>
          <input
            type="file"
            {...register("document", {
              required: "Document is required",
            })}
            className="my-input same-width-input"
            accept=".pdf,.doc,.docx"
          />
          {errors.document && (
            <span className="error">{errors.document.message}</span>
          )}
        </div>

        <div className="file-upload-group">
          <label>Picture:</label>
          <input
            type="file"
            {...register("picture", {
              required: "Picture is required",
            })}
            className="my-input same-width-input"
            accept="image/*"
          />
          {errors.picture && (
            <span className="error">{errors.picture.message}</span>
          )}
        </div>

        <button type="submit" className="my-button same-width-input">
          Submit
        </button>
      </form>
    </div>
  );
}
