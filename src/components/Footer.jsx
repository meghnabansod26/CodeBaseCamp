import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.heading}>CodeBaseCamp</h3>
          <p style={styles.text}>Chase your goal with industry-ready tech training.</p>
        </div>
        <div style={styles.section}>
          <h4 style={styles.subheading}>Contact Us</h4>
          <p style={styles.text}>📞 +91 8275689243</p>
          <p style={styles.text}>📞 +91 9302484500</p>
          <p style={styles.text}>
            📧 <a href="mailto:codebasecamp15@gmail.com" style={styles.link}>codebasecamp15@gmail.com</a>
          </p>
        </div>
        <div style={styles.section}>
          <h4 style={styles.subheading}>Quick Links</h4>
          <p><a href="#header" style={styles.link}>Home</a></p>
          <p><a href="#features" style={styles.link}>About</a></p>
          <p><a href="#courses" style={styles.link}>Courses</a></p>
          <p><a href="#inquiry" style={styles.link}>Contact</a></p>
        </div>
      </div>
      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} CodeBaseCamp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    paddingTop: '40px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // changed from 'space-around'
    padding: '0 20px 40px',
    maxWidth: '1600px',       // added to limit width
    margin: '0 auto',         // centers the container horizontally
  },
  section: {
    flex: '1 1 250px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#ffcc00',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#f1f1f1',
  },
  text: {
    fontSize: '1rem',
    marginBottom: '8px',
    color: '#ccc',
  },
  link: {
    color: '#ffcc00',
    textDecoration: 'none',
  },
  bottom: {
    textAlign: 'center',
    borderTop: '1px solid #333',
    padding: '15px 0',
    fontSize: '0.9rem',
    backgroundColor: '#111',
    color: '#aaa',
  },
};

export default Footer;
