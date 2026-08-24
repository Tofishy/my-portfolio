export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Email: [christopherlogan069@gmail.com]</p>
      <p>GitHub: [https://github.com/Tofishy]</p>

      {/* A simple mock form to fulfill the requirement */}
      <form>
        <div>
          <label>Name: </label>
          <input type='text' placeholder='Your Name' />
        </div>
        <div>
          <label>Message: </label>
          <textarea placeholder='Your message here...'></textarea>
        </div>
        <button type='button'>Send Message</button>
      </form>
    </div>
  );
}
