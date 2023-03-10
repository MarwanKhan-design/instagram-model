import React from "react";
import { Button, Form } from "react-bootstrap";

const CreatePostForm = ({
  formData,
  setFormData,
  createPost,
  loading,
  setLoading,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        createPost();
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required={true}
          value={formData.title}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={"Enter Body"}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          required={true}
          value={formData.body}
        />
      </Form.Group>
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? (
          <div class="spinner-border text-secondary" role="status"></div>
        ) : (
          <>Post</>
        )}
      </button>
    </form>
  );
};

export default CreatePostForm;
