import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Box, Typography, Container } from "@mui/material";
import Image from "next/image";
import styles from "./footer.module.scss";
import footerImg from "../../../images/footer.png";
import logo from "../../../images/logo.svg";
import Button from "../button/button";

type FormValues = {
  name: string;
  email: string;
  message: string;
  telephone: string;
  company: string;
};

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

function Footer(): JSX.Element {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
    telephone: "",
    company: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formValues.name) newErrors.name = "Name is required";
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formValues.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert(
        "Message sent successfully!\n" + JSON.stringify(formValues, null, 2)
      );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.footerImage}>
        <Image src={footerImg} alt="footer" />
      </div>
      <div className={styles.footerForm}>
        <div className={styles.left}>
          <p className={styles.footerFormTitle}>
            We’re <span className={styles.outlinedText}>your</span> IT Services
            problem solvers
          </p>
          <p className={styles.footerFormTxt}>
            Recognising your frustrations with your print environment, IT
            services, document management & communications and finding
            solutions.
          </p>
          <p className={styles.footerFormEnd}>Get in touch today!</p>
        </div>
        <div className={styles.right}>
          <Container maxWidth="sm">
            <Box>
              <form onSubmit={handleSubmit}>
                <Box mb={2}>
                  <TextField
                    sx={{ marginBottom: "14px" }}
                    fullWidth
                    label="Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    sx={{ marginBottom: "14px" }}
                    fullWidth
                    label="Email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    sx={{ marginBottom: "14px" }}
                    fullWidth
                    label="Telephone"
                    name="telephone"
                    value={formValues.telephone}
                    onChange={handleChange}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    sx={{ marginBottom: "14px" }}
                    fullWidth
                    label="Company"
                    name="company"
                    value={formValues.company}
                    onChange={handleChange}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    sx={{ marginBottom: "14px" }}
                    fullWidth
                    label="I need help with..."
                    name="message"
                    multiline
                    value={formValues.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                </Box>
                <Button variant="secondary" text="Submit now" />
              </form>
            </Box>
          </Container>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <Image src={logo} alt="logo" />
        <div className={styles.info}>
          <p>Contact us</p>
          <p>E info@dnslimited.co.uk</p>
          <p>T 0845 034 0895</p>
        </div>
        <div className={styles.info}>
          <p>Address</p>
          <p>Unit 9</p>
          <p>Royal Scot Road</p>
          <p>Pride Park, Derby, DE24 8AJ</p>
          <p>DE24 8AJ</p>
        </div>
        <div className={styles.info}>
          <p>Opening hours</p>
          <p>Mon - Fri:</p>
          <p>9 am - 5:30 pm</p>
        </div>
        <div className={styles.links}>
          <a>About us</a>
          <a>CSR</a>
          <a>Enivronment & Sustainability</a>
          <a>Meet the team</a>
        </div>
        <div className={styles.links}>
          <a>Services</a>
          <a>IT Services</a>
          <a>Communications</a>
          <a>Managed Print Services</a>
          <a>Document Management</a>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.footerEnd}>
        <p className={styles.footerEndTxt}>Design & built by Alt</p>
        <p className={styles.footerEndTxt}>
          © Document Network Services Ltd 2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
