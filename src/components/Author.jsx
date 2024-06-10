import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

const Author = ({ author, setAuthor, authedit }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: authedit,

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),

      date: Yup.date().nullable().required("Required"),

      bio: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      if (values.isEditing) {
        let updatedAuthors = author.map((a) => {
          if (a.id === values.id) {
            return { ...values, isEditing: false };
          } else {
            return a;
          }
        });
        setAuthor(updatedAuthors);
      } else {
        setAuthor([...author, values]);
      }
      navigate("/AuthorPage");
    },
  });

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h1 className="text-center">Enter Author-Details</h1>
        </Card.Title>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Author-Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Author-Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <Form.Text className="text-danger">
                {formik.errors.name}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group controlId="date">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter the Date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            {formik.errors.date ? (
              <Form.Text className="text-danger">
                {formik.errors.date}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group controlId="bio">
            <Form.Label>Enter Short BioGraphy</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter the BioGraphy"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bio}
            />
            {formik.errors.bio ? (
              <Form.Text className="text-danger">
                {formik.errors.bio}
              </Form.Text>
            ) : null}
          </Form.Group>
          <div class="d-grid gap-1">
            <Button type="submit" variant="primary">
              {formik.values.isEditing ? "Update Details" : "Add Details"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Author;