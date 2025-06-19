import styles from '../css/RegisterForm.module.css';
import useRegisterForm from '../helper/userRegisterForm';

import { TextInput } from '../../util/jsx/TextInput';
import { EmailInput } from '../../util/jsx/EmailInput';
import { PasswordInput } from '../../util/jsx/PasswordInput';
import { SelectInput } from '../../util/jsx/SelectInput';

import teamImage from '../assets/team-meeting.jpg';

const RegisterForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useRegisterForm();

  return (
    <div className={styles.container}>
      {/* Left Panel: Form */}
      <div className={styles.leftPanel}>
        <div className={styles.topSection}>
          <div className={styles.logo}>CRM</div>
          <h2 className={styles.heading}>Create an account</h2>
          <p className={styles.subheading}>Sign up and get 30-day free trial</p>
        </div>

        <div className={styles.formSection}>
          <form className={styles.inputGroup} onSubmit={handleSubmit}>
            <TextInput
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              error={errors.fullName}
            />

            <EmailInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled
              error={errors.email}
            />

            <PasswordInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              error={errors.password}
            />

            <SelectInput
              label="Job Title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              options={[
                { label: 'Sales Executive', value: 'sales-executive' },
                { label: 'Product Manager', value: 'product-manager' },
              ]}
              error={errors.jobTitle}
            />

            <SelectInput
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              options={[
                { label: 'Marketing', value: 'marketing' },
                { label: 'Engineering', value: 'engineering' },
              ]}
              error={errors.department}
            />

            <SelectInput
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              options={[
                { label: 'Admin', value: 'admin' },
                { label: 'Editor', value: 'editor' },
              ]}
              error={errors.role}
            />

            <SelectInput
              label="Timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              required
              options={[
                { label: 'GMT+5:30 (India)', value: 'gmt530' },
                { label: 'GMT+0 (UTC)', value: 'utc' },
              ]}
              error={errors.timezone}
            />
          </form>
        </div>

        {/* Bottom Submit & OAuth */}
        <div className={styles.stickyBottom}>
          <button type="submit" className={styles.button} onClick={handleSubmit}>
            Submit
          </button>

          <div className={styles.oauth}>
            <button>Sign in with Apple</button>
            <button>Sign in with Google</button>
          </div>

          <div className={styles.footer}>
            Already have an account? <a href="#">Sign in</a> | <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Right Panel: Image */}
      <div className={styles.rightPanel}>
        <img src={teamImage} alt="Team meeting" className={styles.rightImage} />
      </div>
    </div>
  );
};

export default RegisterForm;
