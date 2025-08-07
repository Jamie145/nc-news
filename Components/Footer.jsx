function Footer() {
    return (
      <footer className="main-footer"> {/* Added main-footer class */}
        <p>&copy; {new Date().getFullYear()} NC Action News</p>
        <p>All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  